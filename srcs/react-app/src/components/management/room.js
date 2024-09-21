import React from 'react';
import '../styles/room.css';
import add from '../../assets/Adds.png';
import deletes from '../../assets/Delete.png';
import edits from '../../assets/Edits.png';
import search from '../../assets/Search.png';
function Room() {

    return (
        <div>
            <div className='container'>
                <div className='selection-zone'>
                    <p className="user">User</p>
                    <p className="room">Room</p>
                </div>

                <div className='event-zone'>

                    <button type='submit'>
                        <img src={add} alt='add' className='add-data' />
                        Add
                    </button>

                    <button type='submit'>
                        <img src={edits} alt='edits' className='edits-data' />
                        Edits
                    </button>

                    <button type='submit'>
                        <img src={deletes} alt='delete' className='delete-data' />
                        Delete
                    </button>

                    <div class="search-container">      
                            <input className = 'input-text' type="text" placeholder="Search.." name="search"></input>
                            <button className ='input-pic' type="input-pic"><img className='search-data' src={search} alt='search' /></button>
                    </div>
                </div>

                {/* <div className='searchbox'>
                    <input type='text' placeholder='search something...'>

                    </input>
                </div> */}

                <div className='table-zone'>
                    <table>
                        <thead>
                            <tr>
                                <th>รหัส</th>
                                <th>ชื่อ</th>
                                <th>นามสกุล</th>
                                <th>แผนก</th>
                                <th>ตำแหน่ง</th>
                                <th>สถานะ</th>
                                <th>คะแนนผู้ใช้</th>
                            </tr>
                        </thead>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Room;