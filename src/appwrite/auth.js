import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService { 
    client = new Client();
    account; // we have to declare variable here because first of all we haven't created client(.methods) and we want this to be created only when they are called so...

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)          // Your API Endpoint
            .setProject(conf.appwriteProjectId);    // Your project ID

        this.account = new Account(this.client);
    }

    // We have created this method as we are taking user data in it and creating the account because in future if we want to jump form appwrite to firebase or our own authentication service then we will just make a little bit changes in constructor and pass the same parameters here to create the account ...
    async createAccount({email, password, name})
    {
        // There must be some errors while creating account like email already exists or password is weak etc. So, we are using try catch to handle them.
        try 
        {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if(userAccount)
            {
                // call another method...
                return this.login({email, password});
            }
            else
            {
                return userAccount;
            }
        } 
        catch (error) 
        {
            throw error;    
        }
    }

    async login({email, password})
    {
        try 
        {
            return await this.account.createEmailPasswordSession(email, password);    
        } 
        catch (error) 
        {
            throw error;
        }
    }

    // This method will be used to check that user is active on which page.
    async getCurrentUser()
    {
        try 
        {
            return await this.account.get(); // this will return the current user if there is any session active otherwise it will throw an error and we will catch that error and return null because there is no user
        } 
        catch (error) 
        {
            console.log("Appwrite service :: getCurrentUser :: ", error);
        }

        return null; // if there is no user then return null
    }

    async logout()
    {
        try 
        {
            return await this.account.deleteSessions("current"); // this will delete all the sessions and logout the user
        } 
        catch (error) 
        {
            console.log("Appwrite service :: logout :: ", error);
        }
    }
}

const authService = new AuthService();

// We have created the 'AuthService' class object 'authService' and exported it because if we export 'AuthService' class then we have to create its new object there and then we can call its methods to use this class, but now we can just write authService.METHOD_NAME to call the method
export default authService;