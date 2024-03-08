import {useState} from "react";

export default function CreateEmployee() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName) {
            return;
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form>
            <input type="text" placeholder="First Name" name='firstName' value={formData.firstName} onChange={handleChange} />
            <input type="text" placeholder="Last Name" name='lastName' value={formData.lastName} onChange={handleChange} />
            <input type="submit" value="Create"/>
        </form>
    )
}