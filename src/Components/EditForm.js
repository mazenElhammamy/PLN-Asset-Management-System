import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'



const initialValues = {
    name: '',
    date: "",
    Total_Km: '',
    volume: '',
    fuelType: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}



const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    date: Yup.date().required('Required').default(function () {
        return new Date();
    }),
    Total_Km: Yup.number()
        .positive()
        .required('Required'),
    volume: Yup.number()
        .positive()
        .required('Required')
        .integer(),

})


const VEHICLEOPTIONS = ["Select Vehicle Name","[001] Toyota Avanza", "[005] Daihatsu Xenia", "[008]  Aston Martin DBX"]
const FUELTYPES = ["Gasoline", "Diesel Fuel", "Ethanol"]




function EditForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    function addFormGroup(fieldName, fieldValue, fieldLable, fieldType, sideText) {
        return (
            <React.Fragment>
                <label >{fieldLable}</label>
                <div className="input-group mb-3">

                    <input type={fieldType} className="form-control" id="name"
                        name={fieldName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={fieldValue}
                    />
                    {sideText ?
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">{sideText}</span>
                        </div> : null}
                  
                </div>
                {formik.touched[fieldName] && formik.errors[fieldName] ? (
                        <div className="alert alert-danger" role="alert">
                            {formik.errors[fieldName]}
                        </div>
                    ) : null}
            </React.Fragment>

        )
    }

    function addSelectGroup(name, value, lable, options) {
        return (
            <div className="form-group">
                <label >{lable}</label>
                <select aria-label="Default select example" className="form-control"
                    name={name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={value}
                >
                    {
                        options.map((option,indx) => {
                            return (
                                <option key={indx}>{option}</option>
                            )

                        })
                    }

                </select>
                {formik.touched[name] && formik.errors[name] ? (
                        <div className="alert alert-danger" role="alert">
                            {formik.errors[name]}
                        </div>
                    ) : null}
            </div>

        )


    }

    return (
        <form onSubmit={formik.handleSubmit} className="m-4">
            <div className="row mb-3">
                {addSelectGroup("name", formik.values.name, "Vehicle", VEHICLEOPTIONS)}
            </div>
            <div className="row mb-3">
                <div className="form-group col-md-6" >
                    {addFormGroup("date", formik.values.date, "Start Date", "date", null)}
                </div>
                <div className="form-group col-md-6" >
                    {addFormGroup("Total_Km", formik.values.Total_Km, "Odometer", "number", "Kms")}
                </div>

            </div>
            <div className="row">
                <div className="form-group col-md-6" >
                    {addFormGroup("volume", formik.values.volume, "Volume", "number", "Ltrs")}
                </div>
                <div className="form-group col-md-6" >
                    {addSelectGroup("fuelType", formik.values.fuelType, "Fuel Type (optional)", FUELTYPES)}
                </div>
            </div>


            <button type='submit'>Submit</button>
        </form>

    )
}

export default EditForm