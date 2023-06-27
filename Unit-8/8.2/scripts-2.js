const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

function findUserByUsername(arr, string){
    return arr.find(function(obj){
        return obj.username === string;
    })
}

function removeUser(arr, string){
    try{
        const user = findUserByUsername(arr, string)
        const index = arr.findIndex(function(obj){
            return obj.username === string;
        })
        delete arr[index];
        return user;
    }
    catch{
        return undefined;
    }
}