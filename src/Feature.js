import React, { Component } from 'react';
import slugify from 'slugify';
import { USCurrencyFormat } from './helpers'

class Feature extends Component {
    constructor(props) {
        super(props)
    }
    onChange = (item) => {
        this.props.onChange(this.props.name, item)
    }

    render() {
        const { name, data, idx } = this.props
        const featureHash = name + '-' + idx;
        const options = data.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <div key={itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={itemHash}
                        className="feature__option"
                        name={slugify(name)}
                        checked={this.props.selectedOptionName === item.name}
                        onChange={e => this.onChange(item)}
                    />
                    <label htmlFor={itemHash} className="feature__label">
                        {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
                </div>
            );
        });

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{name}</h3>
                </legend>
                {options}
            </fieldset>
        );

    }
}

export default Feature