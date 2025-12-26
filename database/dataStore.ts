import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('mydb.db');

export const createTable = () => {
  // db.withTransactionSync(() => {
  //   db.execSync(`DELETE FROM users;`);
  //   console.log('delete')
  // });
  try {
    db.withTransactionSync(() => {
      db.execSync(
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          username TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE,
          phone TEXT,
          password TEXT NOT NULL
        );`
      );
    });
  } catch (error) {
    console.log(error)
    return 500;
  }
};
export const authcreateTable = () => {
  try {
    db.withTransactionSync(() => {
      db.execSync(
        `CREATE TABLE IF NOT EXISTS authuser (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT NOT NULL
        );`
      );
    });
  } catch (error) {
    console.log(error)
    return 500
  }
};

export const insertUser = (username: string, email: string, phone:string, password:string) => {
  try {
    createTable()
    db.withTransactionSync(() => {
      db.runSync(
        'INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?);',
        [username, email, phone, password]
      );
    });
    return 200;
  } catch (error) {
    console.log(error)
    return 500
  }
};

export const getUserByEmail = (email: string, password:string) => {
  try {
    createTable()
    authcreateTable()
    const checker = db.getAllSync(
        `SELECT * FROM users ORDER BY id DESC;`
    );
    if (!checker || checker.length === 0) {
      return 404
    }else{
      const data=db.getFirstSync(
        `SELECT * FROM users WHERE email = ?;`,
        [email]
      );
      if (data==null) {
        return 404
      }else{
        logoutUser()
        db.withTransactionSync(() => {
          db.runSync(
            'INSERT INTO authuser (email) VALUES (?);',
            [email]
          );
        });
        // console.log('data',data.password)
        if (data?.password==password) {
          return 200;
        }else{
          return 500;
        }
        
      }
    }
  } catch (error) {
    return 500;
  }
};

export const logoutUser=()=>{
  try {
    const checker = db.getAllSync(
        `SELECT * FROM authuser ORDER BY id DESC;`
    );
    if (!checker || checker.length === 0) {
      return 404
    }else{
      db.withTransactionSync(() => {
        db.execSync(`DELETE FROM authuser;`);
      });
      return 200;
    }
  } catch (error) {
    console.log(error)
    return 500
  }
}

export const getUsers = () => {
  try {
    createTable()
    const data = db.getAllSync(
        `SELECT * FROM users ORDER BY id DESC;`
    );
    if (!data || data.length === 0) {
      return {
        status: 404,
        data: [],
        message: 'No users found'
      };
    }
    else{
      return db.getAllSync(
      `SELECT * FROM users ORDER BY id DESC;`
      );
    }
  } catch (error) {
    return 500
  }
};

export const getAuthUsers = () => {
  try {
    authcreateTable()
    const data = db.getAllSync(
      `SELECT * FROM authuser ORDER BY id DESC;`
    );
    if (!data || data.length === 0) {
      return {
        status: 404,
        data: [],
        message: 'No users found'
      };
    }

    return {
      status: 200,
      data,
      message: 'Users fetched successfully'
    };
  } catch (error) {
    console.error('SQLite error:', error);

    return {
      status: 500,
      data: null,
      message: 'Database error'
    };
  }
};

export const updateUsers = (email: string, password:string) => {
  try {
    const data=getUsers()
    db.withTransactionSync(()=>{
     db.runSync(
       `UPDATE users
       SET password = ?
       WHERE email = ?;`,
      [password, email]
     )
    })
    // console.log('datauser',getUsers())
    return 200;
  } catch (error) {
    return 404;
  }
}
