/**
 * This is a auth service for appwrite. We create a service so as not to be dependency locked.
 * If some time in the future we decide to not use appwrite. Our system should work with minimal outage.
 */
import conf from "../conf/conf";
import {Client, Account, ID} from "appwrite"

// code improvement over the docs.

export class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email, password, name)
            if(userAccount){
                //call another method, we are going to log him in upon creation.
                this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error){
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            // if you don't want to throw it
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }

        return null 
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
            
        }
    }

}

const authService = new AuthService()


export default authService