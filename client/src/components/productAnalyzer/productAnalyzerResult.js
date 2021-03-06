import React, { Component } from 'react';
import Header from '../header/header';
import { Link } from 'react-router-dom';
import '../../assets/css/productAnalyzer.css';
import IngredientList from '../displayIngredient/ingredientList';
import Loader from '../loader';
import axios from 'axios';

class ProductAnalyzerResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            data: {
                data: null
            }
        }
    }
    async componentDidMount() {
        let query = decodeURIComponent(this.props.match.params.search);
        await axios.post(`/server/api_get_ingredient_by_name_multiple.php`, { query }).then(response => {
            this.setState({
                data: response.data
            }, () => console.log("axios", this.state))
        });
    }

    async componentWillReceiveProps(nextProps) {
        if (this.props.match.params.search !== nextProps.match.params.search) {
            let query = decodeURIComponent(nextProps.match.params.search);
            await axios.post(`/server/api_get_ingredient_by_name_multiple.php`, { query }).then(response => {
                this.setState({
                    data: response.data
                }, () => console.log("axios", this.state));
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: '',
            data: {
                data: null
            }
        });
        let uriEncodedInput = encodeURIComponent(this.state.input);
        this.props.history.push('/product_analyzer_result/' + uriEncodedInput)
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({
            input: event.target.value
        });
    }
    render() {
        if (this.state.data.data === null) {
            return (
                <section>
                    <Header />
                    <Loader className="loader prod-pg-loader" />
                </section>

            )
        }
        return (
            <section>
                <Header history={this.props.history} />
                <IngredientList info={this.state.data} success={this.state.data.success} />
                <form className="check-product-form-field">
                    <div className="check-product-input-container">
                        <textarea autoFocus onChange={this.handleInput.bind(this)} className="check-product-input-field" type="text" placeholder="copy and paste ingredients here..."></textarea>
                    </div>
                    <div className="check-product-button-container">
                        <button className="btn purple" onClick={this.handleSubmit.bind(this)}>Analyze</button>
                    </div>
                </form>
            </section>
        )
    }
}
export default ProductAnalyzerResult