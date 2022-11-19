function Header(){
    return (
        <div className="StickyHeader">
            <div className="Header">
                <img src="https://s3-alpha-sig.figma.com/img/4269/07cc/458052afe359577a66f0cdac017ced71?Expires=1669593600&Signature=Nr5y04~-xg709nYQwrH7ET5pA9zACu59mPYdFNhxbK80YuybN2InF8gaFysWrKpBCKfI0lQTBTolQLgXXo~WA2zSlje-prhZ6X6hunlMyzhyz7U-aKXoFuOir4lydpjhAG8K6QIPR8pHOX8COMAg6bz3DE3cuAuj4O8TWCVVGe4TFNcm8SrZb8S0pjG0LjrHRa9a8JhwJSYA2J6HT8FSN-IaZPVdfYfH0zGyP4bLXPi2zG4mSAJK0LQLCKvR6SIDTwDahrLUj2NLGPPAvmm7AGLEniqRpIXSWFuoa7eMPyTWyJrOGnZoj0wu9QCFzNCuDYmUMOCNtdn1GTuaqPnrxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""></img>
                <h1>Header</h1>
            </div>
            <div>
                <p>Place List</p>
                <select>
                    <option>All</option>
                    <option>Restaurant</option>
                    <option>Bakery</option>
                    <option>Cafe</option>
                </select>
            </div>
        </div>
    );
}

export default Header;