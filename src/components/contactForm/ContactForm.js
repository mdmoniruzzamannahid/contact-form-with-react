import React, { Component } from 'react'



const initialState = {
        name:'',
        email:'',
        password:'',
        bio:'',
        country:'',
        gender:'',
        skills:[]
}

class ContactForm extends Component {

    constructor(){
        super()
        this.myForm = React.createRef()
    }

    state = initialState;
    changeHandeler = event => {
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(event.target.value)
                })
            }else{
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== event.target.value)
                })
            }
        }else{
            this.setState({
                [event.target.name] : event.target.value
            })
        }
    }
    
    submitHandler = event => {
        const contactDetails = this.state
        event.preventDefault()
        console.log(contactDetails)

        this.myForm.current.reset()
        this.setState({
            ...initialState
        })
    }
    render() {
        return (
            <form ref={this.myForm} onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="name"> Enter your Full Name</label>

                    <input 
                        className="form-control"
                        type="text" 
                        placeholder="Enter your name" 
                        name="name" 
                        id="name" 
                        value={ this.state.name }
                        onChange={this.changeHandeler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="email"> Enter your email here</label>
                    
                    <input 
                        className="form-control"
                        type="email" 
                        placeholder="Enter your email" 
                        name="email" 
                        id="email" 
                        value={ this.state.email }
                        onChange={this.changeHandeler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="password"> Enter your password</label>
                    
                    <input 
                        className="form-control"
                        type="password" 
                        placeholder="Enter your password" 
                        name="password" 
                        id="password" 
                        value={ this.state.password }
                        onChange={this.changeHandeler}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="bio"> Enter your Full bio</label>
                    
                    <textarea 
                        className="form-control"
                        type="text" 
                        placeholder="Enter your bio" 
                        name="bio" 
                        id="bio" 
                        value={ this.state.bio }
                        onChange={this.changeHandeler}
                        />
                </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                            <label htmlFor="country">Select a country</label>
                            <select className="form-control" onChange={ this.changeHandeler } name="country" id="country" >
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Australia">Australia</option>
                                <option value="England">England</option>
                                <option value="Germany">Germany</option>
                                <option value="Italy">Italy</option>
                            </select>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <h6>Gender -</h6>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="radio" name="gender" id="gender1" value="Male"/>
                                    <label htmlFor="gender1"> Male </label>
                                </div>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="radio" name="gender" id="gender2" value="Female"/>
                                    <label htmlFor="gender2"> Female </label>
                                </div>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="radio" name="gender" id="gender3" value="Other"/>
                                    <label htmlFor="gender3"> Other </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="form-group">
                                <h6>Skills -</h6>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="checkbox" name="skills" id="skills" value="Javascript"/>
                                    <label htmlFor="skills"> Javascript </label>
                                </div>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="checkbox" name="skills" id="skills1" value="React JS"/>
                                    <label htmlFor="skills1"> React JS </label>
                                </div>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="checkbox" name="skills" id="skills2" value="Angular JS"/>
                                    <label htmlFor="skills2"> Angular JS </label>
                                </div>
                                <div onChange={ this.changeHandeler } className="form-check">
                                    <input type="checkbox" name="skills" id="skills3" value="NodeJS"/>
                                    <label htmlFor="skills3"> NodeJS </label>
                                </div>
                            </div>
                        </div>
                    </div>
                <button className="btn btn-primary" type="submit"> Submit </button>
            </form> 
            
                

        )
    }
}
export default ContactForm
