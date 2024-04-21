const getAllUsers = (req, res) => {
    const data ={
        id: '1',
        name: "Naufal Labib",
        email: "naufallabib@gmail.com",
        nomor: "082132922550"
    }

    res.json({
        message: 'get all users success',
        data: data
    })
}

const createNewUser = (req,res) => {
    console.log(req.body);
    res.json({
        message: 'create new user success',
        data: req.body 
    })
}

const updateUser = (req,res) => {
    const {id} = req.params;
    console.log('id user: ', id);
    res.json({
        message: 'update user success',
        data: req.body,
    })
}

const deleteUser = (req,res) => {
    const {id} = req.params;
    res.json({
        message: 'delete user success',
        data: {
            id: id,
            nama: "Naufal Labib",
            email: "naufallabib@gmail.com", 
            nomor: "082132922550",
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}