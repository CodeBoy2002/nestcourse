import { Injectable } from "@nestjs/common";

//This is used to handle the services in this case - (Login and SignUp Services)
@Injectable({})
export class AuthService{
    private users = [
        {
            id: 1,
            name: "john Duo",
            email: "john@gmail.com",
            role: 'Intern'
        },
        {
            id: 2,
            name: "Megan",
            email: "megan@gmail.com",
            role: 'Engineer'
        },
        {
            id: 3,
            name: "Harry",
            email: "harry@gmail.com",
            role: 'Admin'
        },
        {
            id: 4,
            name: "Susan",
            email: "susan@gmail.com",
            role: 'Intern'
        }
    ]

    //To find all the users with specified role, or return all
    findAll(role?: 'Intern' | 'Engineer' | 'Admin') {
        if(role) {
            return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    //To find a single user with specified id
    findOne(id: number) {
        const user = this.users.find(user => user.id === id)
        return user
    }

    //To create a new user
    create(user: { name: string, email: string, role: 'Intern' | 'Engineer' | 'Admin' }) {
        const userWithHighestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id: userWithHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    } 

    //To update the user
    update(id: number, updatedUser: { name?: string, email?: string, role?: 'Intern' | 'Engineer' | 'Admin' }) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })

        return this.findOne(id)
    }


    //To delete the particular user
    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}