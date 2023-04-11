import Realm from "realm";


export class Todo extends Realm.Object<Todo> {
    _id!: Realm.BSON.ObjectId;
    title!: string;
    completed!: boolean;
    createdAt!: Date;
    static schema = {
      name: 'Todo',
      properties: {
        _id: 'objectId',
        title: 'string',
        completed: 'bool',
        createdAt: 'date'
      },
      primaryKey: '_id',
    };
  }

// Create realm
let realm = new Realm({schema: [Todo], schemaVersion: 1});


// Functions
let getAllTodos = () => {
    return realm.objects('Todo');
}

let addTodo= () => {
    realm.write(()=> {
        realm.create("Todo",{
            _id: new Realm.BSON.ObjectId(),
            title: "Test",
            completed: false,
            createdAt: new Date()
        })
    })
}

let deleteTodo = () => {
    realm.write(() => {
        realm.delete(getAllTodos());
    })
}

// Export the realm
export default realm;

// Export other functions
export {
    getAllTodos,
    addTodo,
    deleteTodo
}