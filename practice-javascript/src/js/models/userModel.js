class UserModel {
  constructor(id,emai,password,first_name,last_name,avatar_url,phone_number,role){
    this.id = id,
    this.emai=emai,
    this.password=password,
    this.first_name=first_name,
    this.last_name=last_name,
    this.avatar_url=avatar_url,
    this.phone_number=phone_number,
    this.role= role
  }
}

export default UserModel;
