import React from 'react';

class FootLinks extends React.Component {

  footerLinks() {
    const activeTab = 'active-foot-link';
    const links = ['Overview', 'Episodes', 'Details'];
    return(
      links.map((link, index) => (
        <li onClick={this.props.onTabChosen.bind(this, index)}
            className={ index === this.props.selectedPane ? 'bb active-foot-link' : 'bb foot-link' }
            key={link}
            >{link}</li>
        ))
    );
  }



 render() {
   return (
     <div className='foot-links'>
       <ul>
         {this.footerLinks()}
       </ul>
     </div>

   );
 }
}

export default FootLinks;
