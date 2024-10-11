function OptionCon({item}){
    console.log(item)
    return(
        <option value={item.AID}>{item.ANAME}</option>
    )
}

function Optionitem({item}){
    const listItems = item.map(item=>(<OptionCon item={item} key={item.AID}/>))
    return(<>{listItems}</>)
}

function OptionList({item}){
    return(<>{item.map(item=>(<Optionitem item={item} key={item.AID}/>))}</>)
}


export {
    OptionList,
}