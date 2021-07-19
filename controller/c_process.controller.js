const db = require('../db')

class C_process {
    async createDeclaredIncome(req, res) {
        const {fullName, binIin, esfReflected} = req.body
        const newdeclaredIncome = await db.query(`INSERT INTO c_declared_income_amount (full_name, bin_iin, esf_reflected_income_amount) values ($1, $2, $3) RETURNING *`, [fullName, binIin, esfReflected])
        res.json(newdeclaredIncome.rows[0])
    }
    async getDeclaredIncome(req, res) {
        const declaredIncomes = await db.query(`SELECT * FROM c_declared_income_amount`)
        res.json(declaredIncomes.rows)
    }
    async updateDeclaredIncome(req, res) {
        const {fullName, binIin, esfReflected} = req.body
        const id = req.params.id
        const declaredIncome = await db.query('UPDATE c_declared_income_amount set full_name = $1, bin_iin = $2, esf_reflected_income_amount = $3 where id = $4 RETURNING *', [fullName, binIin, esfReflected, id])
        res.json(declaredIncome.rows[0])
    }
    async deleteDeclaredIncome(req, res) {
        const id = req.params.id
        const declaredIncome = await db.query('DELETE FROM c_declared_income_amount where id = $1 RETURNING *', [id])
        res.json(declaredIncome.rows[0])
    }
    
    async createDeclaredIncomeConfirmation(req, res) {
        const {fullName, binIin, taxIncomeAmount} = req.body
        const newdeclaredIncome = await db.query(`INSERT INTO c_declared_income_confirmation (full_name, bin_iin, tax_income_amount) values ($1, $2, $3) RETURNING *`, [fullName, binIin, taxIncomeAmount])
        res.json(newdeclaredIncome.rows[0])
    }
    async getDeclaredIncomeConfirmation(req, res) {
        const declaredIncomes = await db.query(`SELECT * FROM c_declared_income_confirmation`)
        res.json(declaredIncomes.rows)
    }
    async updateDeclaredIncomeConfirmation(req, res) {
        const {fullName, binIin, taxIncomeAmount} = req.body
        const id = req.params.id
        const declaredIncome = await db.query('UPDATE c_declared_income_confirmation set full_name = $1, bin_iin = $2, tax_income_amount = $3 where id = $4 RETURNING *', [fullName, binIin, taxIncomeAmount, id])
        res.json(declaredIncome.rows[0])
    }
    async deleteDeclaredIncomeConfirmation(req, res) {
        const id = req.params.id
        const declaredIncome = await db.query('DELETE FROM c_declared_income_confirmation where id = $1 RETURNING *', [id])
        res.json(declaredIncome.rows[0])
    }

    async createEnterpreneurDeclaredIncome(req, res) {
        const {fullName, binIin, incomeAmount, noEmployeeStatement} = req.body
        const newdeclaredIncome = await db.query(`INSERT INTO c_individual_enterpreneur_declared_income (full_name, bin_iin, income_amount, no_employee_statement) values ($1, $2, $3, $4) RETURNING *`, [fullName, binIin, incomeAmount, noEmployeeStatement])
        res.json(newdeclaredIncome.rows[0])
    }
    async getEnterpreneurDeclaredIncome(req, res) {
        const declaredIncomes = await db.query(`SELECT * FROM c_individual_enterpreneur_declared_income`)
        res.json(declaredIncomes.rows)
    }
    async updateEnterpreneurDeclaredIncome(req, res) {
        const {fullName, binIin, incomeAmount, noEmployeeStatement} = req.body
        const id = req.params.id
        const declaredIncome = await db.query('UPDATE c_individual_enterpreneur_declared_income set full_name = $1, bin_iin = $2, income_amount = $3, no_employee_statement = $4 where id = $5 RETURNING *', [fullName, binIin, incomeAmount, noEmployeeStatement, id])
        res.json(declaredIncome.rows[0])
    }
    async deleteEnterpreneurDeclaredIncome(req, res) {
        const id = req.params.id
        const declaredIncome = await db.query('DELETE FROM c_individual_enterpreneur_declared_income where id = $1 RETURNING *', [id])
        res.json(declaredIncome.rows[0])
    }

    async createPayingTaxes(req, res) {
        const {fullName, binIin, paymentOrders} = req.body
        const newPayment = await db.query(`INSERT INTO c_payment_request_formation_paying_taxes (full_name, bin_iin, payment_orders_generation) values ($1, $2, $3) RETURNING *`, [fullName, binIin, paymentOrders])
        res.json(newPayment.rows[0])
    }
    async getPayingTaxes(req, res) {
        const payments = await db.query(`SELECT * FROM c_payment_request_formation_paying_taxes`)
        res.json(payments.rows)
    }
    async updatePayingTaxes(req, res) {
        const {fullName, binIin, paymentOrders} = req.body
        const id = req.params.id
        const payment = await db.query('UPDATE c_payment_request_formation_paying_taxes set full_name = $1, bin_iin = $2, payment_orders_generation = $3 where id = $4 RETURNING *', [fullName, binIin, paymentOrders, id])
        res.json(payment.rows[0])
    }
    async deletePayingTaxes(req, res) {
        const id = req.params.id
        const payment = await db.query('DELETE FROM c_payment_request_formation_paying_taxes where id = $1 RETURNING *', [id])
        res.json(payment.rows[0])
    }

    async createPayingTaxesConfirmation(req, res) {
        const {fullName, binIin, declarationDate, amountPeriod, socialTaxAmountPeriod, opvAmountPeriod, socialSecurityAmountPeriod, vosmsAmountPeriod} = req.body
        const newPayment = await db.query(`INSERT INTO c_payment_request_formation_paying_taxes_confrimation (full_name, bin_iin, declaration_date, iit_amount_period, social_tax_amount_period, opv_amount_period, social_security_amount_period, vosms_amount_period) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [fullName, binIin, declarationDate, amountPeriod, socialTaxAmountPeriod, opvAmountPeriod, socialSecurityAmountPeriod, vosmsAmountPeriod])
        res.json(newPayment.rows[0])
    }
    async getPayingTaxesConfirmation(req, res) {
        const payments = await db.query(`SELECT * FROM c_payment_request_formation_paying_taxes_confrimation`)
        res.json(payments.rows)
    }
    async updatePayingTaxesConfirmation(req, res) {
        const {fullName, binIin, declarationDate, amountPeriod, socialTaxAmountPeriod, opvAmountPeriod, socialSecurityAmountPeriod, vosmsAmountPeriod} = req.body
        const id = req.params.id
        const payment = await db.query('UPDATE c_payment_request_formation_paying_taxes_confrimation set full_name = $1, bin_iin = $2, declaration_date = $3, iit_amount_period = $4, social_tax_amount_period = $5, opv_amount_period = $6, social_security_amount_period = $7, vosms_amount_period = $8 where id = $9 RETURNING *', [fullName, binIin, declarationDate, amountPeriod, socialTaxAmountPeriod, opvAmountPeriod, socialSecurityAmountPeriod, vosmsAmountPeriod, id])
        res.json(payment.rows[0])
    }
    async deletePayingTaxesConfirmation(req, res) {
        const id = req.params.id
        const payment = await db.query('DELETE FROM c_payment_request_formation_paying_taxes_confrimation where id = $1 RETURNING *', [id])
        res.json(payment.rows[0])
    }

    async createStatusTax(req, res) {
        const {fullName, binIin, declarationDate, notifications, reflectedDeclarationIncome, iitToBePaid, knpTax, taxAuthorityCode, taxPaymentDeadline, socialTaxPayable, opvPay, knpPayment, sscToBePaid} = req.body
        const newStatus = await db.query(`INSERT INTO c_status_tax_reporting (full_name, bin_iin, declaration_date, notifications, reflected_declaration_income_amount, iit_tobe_paid_amount, knp_tax, tax_authority_code, tax_payment_deadline, social_tax_payable_amount, opv_pay_amount, knp_payment, ssc_tobe_paid_amount, vosms_tobe_paid_amount) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *`, [fullName, binIin, declarationDate, notifications, reflectedDeclarationIncome, iitToBePaid, knpTax, taxAuthorityCode, taxPaymentDeadline, socialTaxPayable, opvPay, knpPayment, sscToBePaid])
        res.json(newStatus.rows[0])
    }
    async getStatusTax(req, res) {
        const status = await db.query(`SELECT * FROM c_status_tax_reporting`)
        res.json(status.rows)
    }
    async updateStatusTax(req, res) {
        const {fullName, binIin, declarationDate, notifications, reflectedDeclarationIncome, iitToBePaid, knpTax, taxAuthorityCode, taxPaymentDeadline, socialTaxPayable, opvPay, knpPayment, sscToBePaid} = req.body
        const id = req.params.id
        const status = await db.query('UPDATE c_status_tax_reporting set full_name = $1, bin_iin = $2, declaration_date = $3, notifications = $4, reflected_declaration_income_amount = $5, iit_tobe_paid_amount = $6, knp_tax = $7, tax_authority_code = $8, tax_payment_deadline = $9, social_tax_payable_amount = $10, opv_pay_amount = $11, knp_payment = $12, ssc_tobe_paid_amount = $13, vosms_tobe_paid_amount = $14 where id = $15 RETURNING *', [fullName, binIin, declarationDate, notifications, reflectedDeclarationIncome, iitToBePaid, knpTax, taxAuthorityCode, taxPaymentDeadline, socialTaxPayable, opvPay, knpPayment, sscToBePaid, id])
        res.json(status.rows[0])
    }
    async deleteStatusTax(req, res) {
        const id = req.params.id
        const status = await db.query('DELETE FROM c_status_tax_reporting where id = $1 RETURNING *', [id])
        res.json(status.rows[0])
    }
}

module.exports = new C_process()
