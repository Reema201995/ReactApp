import React, {Component} from 'react';

const List = (props) => {
    const lists = props.listData.map((row,index) => {
        const style = {
            color: 'blue',
            cursor: 'pointer'
        };
        return (
            <li key={index}>
                <span style={style} onClick={() => props.removeData(index)}>{row}</span>
            </li>
        );
    });

    return (
        <ul>{lists}</ul>
    );
};

class Info extends Component {
  render() {
    const {infoData,removeData} = this.props;
    return (
      <List listData={infoData} removeData={removeData} />
    )
  };
}

export default Info;