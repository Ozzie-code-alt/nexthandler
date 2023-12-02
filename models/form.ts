import { Schema, model, models } from "mongoose";


const FormSchema = new Schema ({
name: String,
username: String,
age: Date, 

})

const FormModel = models.FormModel || model('FormModel', FormSchema)

export default FormModel