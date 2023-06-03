import React from 'react';

class EditContacts extends React.Component{
    // creating constructor here to edit & update contact in contact card. 
    constructor(props) {
        super(props)
        const {id, name, number, email} = props.location.state.contact;
        // initialising state ( as key & value are same, we only define the key here)
        this.state = {
           id,
           name,
           number,
           email, 
        };
    } ;

    // creating add function which is assigned in form 
    update = (e) => {
        // to prevent the form from refresh
        e.preventDefault();

        //    to show the alert message if required fields are not filled
        if(this.state.name === "" || this.state.number === "" ){
            alert("Name & Number is required!")
            return
        }

        // use addContactHandler as property as pass the state(contain name, number & email)
        this.props.updateContactHandler(this.state);

        // to clear the name, number & email fileds after successfully adding the contact(when click on add button) using set state
        this.setState({name:"", number:"", email:""});

        // to return to home page from add contact page after clicking on add button
        this.props.history.push("/");   

    };

    render() {
        return (
            <div className='ui main'>
                <h2 className='AddContact-Heading'>
                    Edit Contact
                </h2>
                <form className='ui form'
                    onSubmit={this.update}>
                    {/* here we assign add function in form so that it submit the form on clicking add */}
        
                    <div className='field'> 
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Name'
                            value={this.state.name} 
                            onChange={ (e) => this.setState({name:e.target.value})}>
                        </input>

                    </div>
                    <div className='field'> 
                        <label>Number</label>
                        <input 
                            type='number' 
                            name='number' 
                            placeholder='Number'
                            value={this.state.number} 
                            onChange={ (e) => this.setState({number:e.target.value})}>
                        </input>

                    </div>
                    <div className='field'> 
                        <label>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            placeholder='Email'
                            value={this.state.email} 
                            onChange={ (e) => this.setState({email:e.target.value})}>
                        </input>

                    </div>
                    <button className='ui-button-Add'>Update</button>
                </form>
            </div>

        );
    };

};
export default EditContacts;