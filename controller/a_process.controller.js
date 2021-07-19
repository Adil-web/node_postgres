const db = require('../db')

class A_process {
    async createClient(req, res) {
        const {binIin, signingDate, signingConfirmation} = req.body
        const newClient = await db.query(`INSERT INTO a_clients (bin_iin, signing_date, signing_confirmation) values ($1, $2, $3) RETURNING *`, [binIin, signingDate, signingConfirmation])
        res.json(newClient.rows[0])
    }
    async getClient(req, res) {
        const clients = await db.query(`SELECT * FROM a_clients`)
        res.json(clients.rows)
    }
    async updateClient(req, res) {
        const {binIin, signingDate, signingConfirmation} = req.body
        const id = req.params.id
        const client = await db.query('UPDATE a_clients set bin_iin = $1, signing_date = $2, signing_confirmation = $3 where id = $4 RETURNING *', [binIin, signingDate, signingConfirmation, id])
        res.json(client.rows[0])
    }
    async deleteClient(req, res) {
        const id = req.params.id
        const client = await db.query('DELETE FROM a_clients where id = $1 RETURNING *', [id])
        res.json(client.rows[0])
    }

    async createDisconnectingClient(req, res) {
        const {binIin, disconnectionDate, disconnectionConfirmation} = req.body
        const newClient = await db.query(`INSERT INTO a_client_disconnecting_from_services (bin_iin, disconnection_date, disconnection_confirmation) values ($1, $2, $3) RETURNING *`, [binIin, disconnectionDate, disconnectionConfirmation])
        res.json(newClient.rows[0])
    }
    async getDisconnectingClient(req, res) {
        const clients = await db.query(`SELECT * FROM a_client_disconnecting_from_services`)
        res.json(clients.rows)
    }
    async updateDisconnectingClient(req, res) {
        const {binIin, disconnectionDate, disconnectionConfirmation} = req.body
        const id = req.params.id
        const client = await db.query('UPDATE a_client_disconnecting_from_services set bin_iin = $1, disconnection_date = $2, disconnection_confirmation = $3 where id = $4 RETURNING *', [binIin, disconnectionDate, disconnectionConfirmation, id])
        res.json(client.rows[0])
    }
    async deleteDisconnectingClient(req, res) {
        const id = req.params.id
        const client = await db.query('DELETE FROM a_client_disconnecting_from_services where id = $1 RETURNING *', [id])
        res.json(client.rows[0])
    }

    async createClientInfo(req, res) {
        const {binIin, fullName, kbe, legalAddress, actualAddress, memberType} = req.body
        const newClient = await db.query(`INSERT INTO a_client_info (bin_iin, full_name, kbe, legal_address, actual_address, member_type) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [binIin, fullName, kbe, legalAddress, actualAddress, memberType])
        res.json(newClient.rows[0])
    }
    async getClientInfo(req, res) {
        const clients = await db.query(`SELECT * FROM a_client_info`)
        res.json(clients.rows)
    }
    async updateClientInfo(req, res) {
        const {binIin, fullName, kbe, legalAddress, actualAddress, memberType} = req.body
        const id = req.params.id
        const client = await db.query('UPDATE a_client_info set bin_iin = $1, full_name = $2, kbe = $3, legal_address = $4, actual_address = $5, member_type = $6 where id = $7 RETURNING *', [binIin, fullName, kbe, legalAddress, actualAddress, memberType, id])
        res.json(client.rows[0])
    }
    async deleteClientInfo(req, res) {
        const id = req.params.id
        const client = await db.query('DELETE FROM a_client_info where id = $1 RETURNING *', [id])
        res.json(client.rows[0])
    }
}


module.exports = new A_process()
