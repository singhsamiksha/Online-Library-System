import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function BrowserPage(){
    return (
        <>
            <Navbar/>
            <Outlet/>
            <div className="Browse_books">
                
                <div className="category_flex">
                    <div className="search"> 
                        <p>Search Book Keywords</p>
                        <input type="text" placeholder="search"></input>
                    </div>
                    <div className="select">
                    <p>Categories</p>
                    <select>
                        <option value="">All</option>
                        <option value="fiction">Fiction</option>
                        <option value="classic">Classic</option>
                        <option value="dystopian">Dystopian</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="romance">Romance</option>
                        <option value="adventure">Adventure</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="coming-of-age">Coming-of-age</option>
                        <option value="magical-realism">Magical Realism</option>
                        <option value="literary-fiction">Literary Fiction</option>
                        <option value="historical-fiction">Historical Fiction</option>
                        <option value="epic">Epic</option>
                        <option value="mythology">Mythology</option>
                        <option value="poetry">Poetry</option>
                        <option value="philosophical-fiction">Philosophical Fiction</option>
                        <option value="psychological-fiction">Psychological Fiction</option>
                        <option value="gothic">Gothic</option>
                        <option value="philosophical">Philosophical</option>
                        <option value="satire">Satire</option>
                        <option value="childrens-literature">Children's Literature</option>
                        <option value="fable">Fable</option>
                        <option value="war">War</option>
                        <option value="social-commentary">Social Commentary</option>
                        <option value="comedy">Comedy</option>
                        <option value="feminist-fiction">Feminist Fiction</option>
                        <option value="mystery">Mystery</option>
                        <option value="absurdist-fiction">Absurdist Fiction</option>
                        <option value="existential">Existential</option>
                        <option value="drama">Drama</option>
                        <option value="young-adult">Young Adult</option>
                        <option value="horror">Horror</option>
                        <option value="nature">Nature</option>
                        <option value="post-apocalyptic">Post-Apocalyptic</option>
                        <option value="historical">Historical</option>
                        <option value="mythopoeia">Mythopoeia</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrowserPage;