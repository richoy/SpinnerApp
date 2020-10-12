export class formSpinnerControl {
    isItImage: boolean;
    image: any;
    textFieldOne: string;
    percentage: number;
    isItEmail: boolean;
    textPopUp: string;
    email: string;
    bgColor: string;

    constructor(isImage, image, textOne, percentage, isEmail, textPopUp, email, color){
        this.isItImage = isImage;
        this.image = image;
        this.textFieldOne = textOne;
        this.percentage = percentage;
        this.isItEmail = isEmail;
        this.textPopUp = textPopUp;
        this.email = email;
        this.bgColor = color;
    }
}
