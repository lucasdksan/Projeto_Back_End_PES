interface ClientProps{
    id: string;
    name: string;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
}

export default {
    render(client: ClientProps){
        return {
            id: client.id,
            name: client.name,
            email: client.email,
        }
    },
    renderMany(clients: ClientProps[]){
        return clients.map(client => this.render(client));
    }
}