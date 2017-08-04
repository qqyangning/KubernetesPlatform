import React from 'react'

class Paging extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            total: 11,
            current : 4,
            visiblePage: 3
        };
        this.handlePageChanged = this.handlePageChanged.bind(this);
    }

    handlePageChanged(newPage) {
        this.setState({ current : newPage });
    }

    render() {
        return (
            <Pager
                total={this.state.total}
                current={this.state.current}
                visiblePages={this.state.visiblePage}
                titles={{ first: '<|', last: '>|' }}
                className="pagination-sm pull-right"
                onPageChanged={this.handlePageChanged}
            />
        );
    }
}

export default  Paging
