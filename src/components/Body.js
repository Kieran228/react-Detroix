import React from "react";
import puzzle from "../images/media/puzzle.png"
import plant from "../images/media/plant.png"
import maze from "../images/media/maze.png"


function Body() {
    return(
        <div className="row">
            <Bodycolumns />
        </div>
    )
}


function Bodycolumns() {
    
    return(
        <div className="middlesection container">
        <div className="middlecolumns row">
            <div className="middlesectioncolumn1 col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>SMART</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src={puzzle} alt="puzzle"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quis quos repudiandae esse officiis, ea autem consequatur quisquam mollitia consequuntur.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button>MORE</button>
                    </div>
                </div>
            </div>
            <div className="middlesectioncolumn2 col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>STRONG</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src={plant} alt="plant"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, numquam placeat sapiente ullam nesciunt nulla? Id culpa tempore totam libero.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button>MORE</button>
                    </div>
                </div>
            </div>
            <div className="middlesectioncolumn3 col-4">
                <div className="row">
                    <div className="col-12">
                        <h3>STABLE</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img className="img-fluid" src={maze} alt="maze"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit possimus fuga ipsum molestiae itaque magnam aliquid quasi nulla cumque.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button>MORE</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default Body;