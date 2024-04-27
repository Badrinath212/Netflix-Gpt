
const formValidate=(email,password)=>{
    const emailval=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passwordval=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!emailval) return "Enter the valid email";
    if(!passwordval) return "Enter the valid password";
    return null;

};

export default formValidate;