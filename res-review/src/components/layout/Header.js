import React from 'react';
import ReactDom from 'react-dom';
import { DatePicker, message } from 'antd';
import '../../App.css';

export default class TestAntd extends React.Component {
    state = {
        date: null
    };

    handleChange = date => {
        message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
        this.setState({ date });
    };

    render() {
        const { date } = this.state;
        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <DatePicker onChange={this.handleChange} />
                <div style={{ marginTop: 20 }}>
                    Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
                </div>
            </div>
        );
    }
}
