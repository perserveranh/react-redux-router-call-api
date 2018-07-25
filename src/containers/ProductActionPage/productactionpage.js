import React, { Component } from 'react';
import { connect } from 'react-redux';
import './pageaction.css';
import { Link } from 'react-router-dom';
import { actGetProductRequest, actUpdateProductRequest, actAddProductRequest } from '../../actions';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            ckbStatus: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            console.log(nextProps);
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                ckbStatus: itemEditting.status,

            })
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, ckbStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: ckbStatus
        };
        if (id) {
            this.props.dispatch(actUpdateProductRequest(product));
        }
        else {
            this.props.dispatch(actAddProductRequest(product));
        }
        this.props.history.goBack();
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    componentWillMount() {
        var { match } = this.props;

        if (match) //update
        {
            var id = match.params.id;
            this.props.dispatch(actGetProductRequest(id));
        }
    }
    render() {
        var { txtName, txtPrice, ckbStatus } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 col-md-8 col-xs-8">
                        <form onSubmit={this.onSubmit} >
                            <legend>Form title</legend>
                            <legend>* Vui lòng nhập đầy đủ thông tin</legend>

                            <div className="form-group">
                                <label htmlFor="">NAME</label>
                                <input
                                    onChange={this.onChange}
                                    type="text" required
                                    className="form-control"
                                    name="txtName" value={txtName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">PRICE</label>
                                <input
                                    onChange={this.onChange}
                                    type="number"
                                    className="form-control"
                                    name="txtPrice" value={txtPrice} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">STATUS</label>
                            </div>
                            <div className="checkbox">
                                <label htmlFor="">
                                    <input
                                        checked={ckbStatus}
                                        onChange={this.onChange}
                                        type="checkbox"
                                        name="ckbStatus" />
                                    YES
                                </label>
                            </div>

                            <br />
                            <br />
                            <Link to="/product/list" className="btn btn-danger mr-5">
                                <i className="glyphicon glyphicon-arrow-left"></i> Trở Lại
                            </Link>
                            <button type="submit" className="btn btn-primary">
                                <i className="glyphicon glyphicon-save"></i> Lưu Lại
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        itemEditting: state.itemEditting
    }
}
export default connect(mapStateToProps)(ProductActionPage);
