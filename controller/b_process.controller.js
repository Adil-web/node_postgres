const db = require('../db')

class B_process {
    async createBuyer(req, res) {
        const {fullName, binIin, kbe, knp, basicContractNumber, address, requisites} = req.body
        const newBuyer = await db.query(`INSERT INTO b_buyer (full_name, bin_inn, kbe, knp, basic_contract_number, address, requisites) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [fullName, binIin, kbe, knp, basicContractNumber, address, requisites])
        res.json(newBuyer.rows[0])
    }
    async getBuyer(req, res) {
        const buyers = await db.query(`SELECT * FROM b_buyer`)
        res.json(buyers.rows)
    }
    async updateBuyer(req, res) {
        const {fullName, binIin, kbe, knp, basicContractNumber, address, requisites} = req.body
        const id = req.params.id
        const buyer = await db.query('UPDATE b_buyer set full_name = $1, bin_inn = $2, kbe = $3, knp = $4, basic_contract_number = $5, address = $6, requisites = $7 where id = $8 RETURNING *', [fullName, binIin, kbe, knp, basicContractNumber, address, requisites, id])
        res.json(buyer.rows[0])
    }
    async deleteBuyer(req, res) {
        const id = req.params.id
        const buyer = await db.query('DELETE FROM b_buyer where id = $1 RETURNING *', [id])
        res.json(buyer.rows[0])
    }

    async createEsfEavr(req, res) {
        const {name, unit, quantity, price, constExcVat, vatRate, vatAmount, totalCost, turnoverDate, dischangeDate} = req.body
        const newEsfEavr = await db.query(`INSERT INTO b_esf_eavr (name, unit, quantity, price, cost_exc_vat, vat_rate, vat_amount, total_cost, turnover_date, discharge_date) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, [name, unit, quantity, price, constExcVat, vatRate, vatAmount, totalCost, turnoverDate, dischangeDate])
        res.json(newEsfEavr.rows[0])
    }
    async getEsfEavr(req, res) {
        const esfEavrs = await db.query(`SELECT * FROM b_esf_eavr`)
        res.json(esfEavrs.rows)
    }
    async updateEsfEavr(req, res) {
        const {name, unit, quantity, price, constExcVat, vatRate, vatAmount, totalCost, turnoverDate, dischangeDate} = req.body
        const id = req.params.id
        const esfEavr = await db.query('UPDATE b_esf_eavr set name = $1, unit = $2, quantity = $3, price = $4, cost_exc_vat = $5, vat_rate = $6, vat_amount = $7, total_cost = $8, turnover_date = $9, discharge_date = $10 where id = $11 RETURNING *', [name, unit, quantity, price, constExcVat, vatRate, vatAmount, totalCost, turnoverDate, dischangeDate, id])
        res.json(esfEavr.rows[0])
    }
    async deleteEsfEavr(req, res) {
        const id = req.params.id
        const esfEavr = await db.query('DELETE FROM b_esf_eavr where id = $1 RETURNING *', [id])
        res.json(esfEavr.rows[0])
    }

    async createSeller(req, res) {
        const {fullName, kbe, contract, paymentTerms, requisites} = req.body
        const newseller = await db.query(`INSERT INTO b_seller (full_name, kbe, contract, payment_terms, requisites) values ($1, $2, $3, $4, $5) RETURNING *`, [fullName, kbe, contract, paymentTerms, requisites])
        res.json(newseller.rows[0])
    }
    async getSeller(req, res) {
        const sellers = await db.query(`SELECT * FROM b_seller`)
        res.json(sellers.rows)
    }
    async updateSeller(req, res) {
        const {fullName, kbe, contract, paymentTerms, requisites} = req.body
        const id = req.params.id
        const seller = await db.query('UPDATE b_seller set full_name = $1, kbe = $2, contract = $3, payment_terms = $4, requisites = $5 where id = $6 RETURNING *', [fullName, kbe, contract, paymentTerms, requisites, id])
        res.json(seller.rows[0])
    }
    async deleteSeller(req, res) {
        const id = req.params.id
        const seller = await db.query('DELETE FROM b_seller where id = $1 RETURNING *', [id])
        res.json(seller.rows[0])
    }

    async createStatus(req, res) {
        const {esfEavrFormed, isEsfSignedSent, isEsfLoadedAccepted} = req.body
        const newstatus = await db.query(`INSERT INTO b_status (esf_eavr_formed, is_esf_signed_sent, is_esf_loaded_accepted) values ($1, $2, $3) RETURNING *`, [esfEavrFormed, isEsfSignedSent, isEsfLoadedAccepted])
        res.json(newstatus.rows[0])
    }
    async getStatus(req, res) {
        const status = await db.query(`SELECT * FROM b_status`)
        res.json(status.rows)
    }
    async updateStatus(req, res) {
        const {esfEavrFormed, isEsfSignedSent, isEsfLoadedAccepted} = req.body
        const id = req.params.id
        const status = await db.query('UPDATE b_status set esf_eavr_formed = $1, is_esf_signed_sent = $2, is_esf_loaded_accepted = $3 where id = $4 RETURNING *', [esfEavrFormed, isEsfSignedSent, isEsfLoadedAccepted, id])
        res.json(status.rows[0])
    }
    async deleteStatus(req, res) {
        const id = req.params.id
        const status = await db.query('DELETE FROM b_status where id = $1 RETURNING *', [id])
        res.json(status.rows[0])
    }
}

module.exports = new B_process()
