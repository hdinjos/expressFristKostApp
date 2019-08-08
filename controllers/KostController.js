const db = require('../config/database')

class KostController {
    static index(req, res) {
        // logic here
        const query = `
            SELECT houses.*, user.*
            FROM houses
            INNER JOIN user
            ON houses.id=user.user_id
        `
        db.query(query, (err, rows, fields) => {
            if (err) {
                throw err
            }

            console.log(rows)

            return res.render('index', {
                maps : rows
            })
        })
    }
 
}




module.exports = KostController