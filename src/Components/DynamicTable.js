import React, { Component } from 'react';

class DynamicTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
          selectedId: 0,
          selectedValue: '',
          key: 0,
          rowdatas: [],
          fields: [
            {
                id: 0,
                value: 'Select'
            },
            {
              id: 1,
              value: 'GSN'
          },
          {
            id: 2,
            value: 'NDC'
        },
        {
            id: 3,
            value: 'REC NDC'
        },
        {
            id: 4,
            value: 'DOD Number'
        },
        {
            id: 5,
            value: 'Rank'
        }]
      }
      this.onDelRow = this.onDelRow.bind(this);
    }

    onChange(event){
        this.setState({
            selectedId: event.target.index,
            selectedValue: event.target.value
        })
    }
    onClick() {
        let rowdata ={};
        rowdata.id = this.state.selected;
        rowdata.value = this.state.selectedValue;
        this.state.rowdatas.push(rowdata);
        const datas = this.state.rowdatas;
        this.setState({rowdatas: datas});
    }
    saveData() {

    }
    onDelRow(index) {
        let arr = this.state.rowdatas;
        let newArr = arr.splice(index,1);
        this.setState({
            rowdatas: newArr
        })
    }
    render() {
        let rows = this.state.rowdatas.map((rowdata) => {
            return <Row 
                key={rowdata.id}
                data={rowdata}
                onDelRow={this.onDelRow}
            />
        })
        let options = this.state.fields.map((data) => {
            return <Option 
                key={data.id}
                data={data}
            />
        })
        return(
            <div>
                <div>
                    <tr>
                        <label>Select Name:</label>
                        <select value={this.state.selectedValue}
                        onChange={this.onChange.bind(this)}>
                            {options}
                        </select>
                        <button onClick={this.onClick.bind(this)}>Add New Row</button>
                    </tr>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.saveData.bind(this)}>Save</button>
            </div>
        )
    }
}
const Row = (props) => {
    return(
        <tr>
            <td>{ props.data.value }</td>
            <td>
                <input type="text" onChange={props.onChange} placeholder='Enter value..' />
            </td>
            <td><button onClick={props.onDelRow}>X</button></td>
        </tr>
    )
}
const Option = (props) => {
    return(
      <option value={props.key}>{props.data.value}</option>
    )
}

export default DynamicTable;