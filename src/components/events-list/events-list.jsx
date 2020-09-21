import React from 'react';
import EventsItem from '../events-item';
import EventsItemLg from '../events-item-lg';
import EmptyMessage from '../empty-message';
import noArticlesImage from '../../assets/no-articles.png';
import './events-list.css';

const EventsList = ({ list }) => {
    
    const _noItemsText = 'Нет новых обьявлений';

    const getItemToRender = (item) => {
        const clazz = getClazz(item);

        return item.type !== 'news'
            ?  <EventsItem item clazz={ clazz } />
            :  <EventsItemLg item />
    }

    const getClazz = (item) => {
        if (item.type === 'company') {
            return 'red';
        } else if (item.type === 'employee') {
            return 'blue';
        }
    }

    const renderItems = (list) => {
        return list.map((item) => {
            return getItemToRender(item);
        });
    }

    const getArrayFromObject = (obj) => {
        return Object.entries(obj);
    }

    const getArrayLength = (arr) => {
        return arr.length;
    }

    const isArray = (obj) => {
        return Array.isArray(obj);
    }

    const dataLength = isArray(list) 
        ? getArrayLength(list)
        : getArrayLength( getArrayFromObject(list) );

    const getItemsToShow = (list, dataLength, text, image) => {

        return dataLength === 0
            ? <EmptyMessage text={ text } image={ image } />
            : renderItems(list);
    }    

    const itemsToRender = getItemsToShow(list, dataLength, _noItemsText, noArticlesImage);

    return (
        <ul className="events-list">
            { itemsToRender }
        </ul>
    )
}

export default EventsList;