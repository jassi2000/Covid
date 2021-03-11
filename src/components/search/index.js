import React  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import  "./styles.css"
const api_url="https://api.covid19api.com/countries"

export default class ComboBox extends React.Component {
  state = {
     data : [],
     Country :'',
    slagforapi : ''
  }    

  async componentDidMount(){
    const response = await fetch(api_url);
    const res = await response.json();
    this.setState({
      data:res
    })
  }
  render(){
  return (
    <Autocomplete
      id="combo-box-demo"
      options={this.state.data}
      getOptionLabel={(option) => option.Country}
      defaultValue={this.state.data.find(v => v.Country[0])}
      onChange={(event,value)=>this.setState({Country : value.Country,slagforapi:value.Slug})}
      renderInput={(params) => <TextField {...params} label="Country" variant="outlined" />}
    />
  );
  }
}