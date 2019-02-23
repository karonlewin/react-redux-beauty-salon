import React from 'react';

class CategoryIcon extends React.Component {
  categoryIcon = (category) => {
    switch (category) {
      case 'facial':
        return 'fa-theater-masks';
      case 'hair':
        return 'fa-cut';
      case 'nails':
        return 'fa-hand-scissors';
      case 'products':
        return 'fa-burn'
      default:
        return 'fa-shopping-cart'
    }
  }

  render(){
    return (
      <span className="panel-icon has-text-danger">
        <i className={"fas " + this.categoryIcon(this.props.category)} aria-hidden="true"></i>
      </span>
    )
  }
}

export default CategoryIcon;
