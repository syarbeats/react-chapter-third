import React from 'react'

class InsertEmployee extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card-header">Add New Employee</div>
                <div className="card-body">
                    <div>
                        <form className="form-horizontal" action="#" method="post">
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="id">ID:</label>
                                <div className="col-sm-10">
                                    <input type="text"  className="form-control" placeholder="Enter employee id" name="id"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="name">NAME:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" placeholder="Enter employee name" name="name"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="salary">SALARY:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" placeholder="Enter employee salary" name="salary"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-info">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default InsertEmployee;