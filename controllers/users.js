const users = require('/data/users')
const sampleUser = require('/data/sampleUser')

const userList = (req, res) => {
    res.json(users);
}

const userId = (req, res) => {
    let id =req.params.id -1
    if(users[id] === true) {
        return res.json(users[id])
    } else {
        res.status(404).send({msg: `User: ${req.params.id} does not exist.`})
    }
}

const userUpdate = (req, res) => {
    let update = req.params.id -1
    if (users[update]){
      users[update].name = sampleUser.name
      return res.json(users[update])
    } else {
      res.status(400).send({ msg: `User: ${req.params.id} does not exist.`})
    }
}

const createUser = (req, res) => {
  let addingUser = users.length
  let newUser = sampleUser
  newUser.id = addingUser + 1
  users.push(newUser)
    if(users[addingUser] === true) {
      return res.json(users[addingUser])
    } else {
      res.status(400).send({msg: `There is an error creating this user.`})
    }
    
}

const deleteUserId = (req, res) => {
        let chosenUser = req.params.id -1
        if (users[chosenUser]){
          users[chosenUser].isActive = false
          res.send("Deletion Complete") 
        } else {
          res.status(400).send({ msg: `User ${req.params.id} does not exist. Therefore, it cannot be deleted.`})
        }
    };
    module.exports = {
        userList, userId, createUser, userUpdate, deleteUserId
}