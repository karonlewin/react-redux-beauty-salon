import React from 'react';

class CategoryIcon extends React.Component {
  categoryIcon = (category) => {
    switch (category) {
      case 'facial':
        return 'fa-theater-masks';
        break;
      case 'hair':
        return 'fa-cut';
        break;
      case 'nails':
        return 'fa-hand-scissors';
        break;
      case 'products':
        return 'fa-burn'
        break;
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
