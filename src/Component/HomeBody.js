import EntryItem from "./EntryItem";

function HomeBody ({pokemonList  }) {
//console.log(pokemonList);
    return (
        <div>
            <div>
                //dropdown type filter
            </div>
            <div className="email-list">{
      pokemonList.map((pokemonList, index)=> {

         return (<EntryItem pokemonList={pokemonList} key={index}/>)
        }
      )
    }
  </div>
        </div>
    )
}

/*
          this.props.emailList.map((email, each) => {
            return <ListEmailItem key={each} id={each} email={email} callback={this.props.callback}/>
            })
          }
*/


export default HomeBody;