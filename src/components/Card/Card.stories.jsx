import React from 'react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
};

export const Default = () => <Card title="Default Card Title" content="Default Content"/>;
export const LongContent = () => <Card title='Title' content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, omnis! Error, exercitationem pariatur! Doloribus vitae consequuntur iste explicabo laborum accusamus ad omnis architecto quas fugiat nam, ipsa optio sint ipsum placeat excepturi molestiae officia, voluptas repellendus ullam? Aperiam veniam nostrum voluptas laudantium qui nesciunt nihil, reiciendis est accusantium repudiandae deserunt!' />;
export const Blue = () => <Card title="Default Card Title" content="Default Content" bgcolor="blue" />;
