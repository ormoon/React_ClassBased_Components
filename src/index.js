import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import moment from 'moment';

import ApprovalCard from './ApprovalCard';



const App = () => {
    return (
        <div className="ui comments">
            <ApprovalCard>
                <div>
                    <h4 style={{ color: 'red' }}>Warning!</h4>
                    Are you Sure Want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Rahul" time={moment().calendar()} cmt="Hey! dude thanks for such a great post" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" time={moment().calendar()} cmt="You make my day easier" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Rey" time={moment().calendar()} cmt="Great article" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ohm" time={moment().calendar()} cmt="What a logic, simple explanation on such a difficult task" />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)