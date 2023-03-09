import React, { Component } from 'react';
import PreviewComponent from '../../Components/Preview-component/PreviewComponent';
import Search from '../../Components/Search/Search';
import SHOP_DATA from './ShopData';

export default class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
            search: ''
        }
    }
    render() {
        const { collections } = this.state;
        const { search } = this.state;
        const onSearchChange = (searchData) => {
            this.setState({
                search: searchData
            })
        }
        const filterCollection = collections.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase())
            );
        })
        return (
            <div className='shop-page'>
                <Search searchChange={onSearchChange} />

                {
                    filterCollection.map(({ id, ...otherProps }) => {
                        return <PreviewComponent key={id} {...otherProps} />
                    })

                }

            </div>
        )
    }
}
