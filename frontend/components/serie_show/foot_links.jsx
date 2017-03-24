import React from 'react';

class FootLinks extends React.Component {

  footerLinks() {
    const activeTab = 'active-foot-link';
    let links;
    if (this.props.episodeCount > 1) {
      links = ['Overview', 'Episodes', 'Details'];
    } else {
      links = ['Overview', '', 'Details'];
    }

    return(
      links.map((link, index) => (
        <li onClick={this.props.onTabChosen.bind(this, index)}
            className={ index === this.props.selectedPane ? 'bb active-foot-link' : 'foot-link bb' }
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
