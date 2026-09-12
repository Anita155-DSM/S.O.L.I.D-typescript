interface User {
  username: string;
  email: string;
}

// class UserManager {
//   users: User[] = [];

//   register(username: string, email: string): string {

//     this.users.push({ username, email });
//     return this.sendWelcomeEmail(email);
//   }

//   private sendWelcomeEmail(email: string): string {
//     return `Email enviado a ${email}`;
//   }

//creamos una clase que registre y otra que guarde en "la bd", o sea lo guarde en el arreglo, otro envia el email
class UserValidator { //valida si es un email
  // constructor({username, email}: User){
  // }
  validate({email}: User) {
    if(!email.includes("@"))
      throw new Error("El correo no es valido");
  }
}

class UserRepository { //guarda en la "bd"(que en realidad es un arreglo), o sea tenemos persistencia 
  users: User[] = [];
  // constructor({username, email}: User){
  // }
  save({username, email}: User){
    return this.users.push({username, email})
  } 
}

class EmailService { //enviar un email
  public sendWelcomeEmail({email}: User): string {
    return `Email enviado a ${email}`;
  }
}

class UserRegistrationService { //inyeccion de dependencias (incorporacion de las otras clases)
  //aca incorporariamos todas las clases

  constructor(
    public userValidator: UserValidator = new UserValidator(),
    public userRepository: UserRepository = new UserRepository(),
    public emailService: EmailService = new EmailService()
  ){}

  createUser(user: User){ //recibe username e email
    this.userValidator.validate(user)
    this.userRepository.save(user)
    return this.emailService.sendWelcomeEmail(user)
  }
} 

const users = new UserRegistrationService()

const newUser = {
  username: "ana",
  email: "ana@gmail.com"
}

users.createUser(newUser)
console.log(users.userRepository.users) //aca vemos que se guardo en el arreglo