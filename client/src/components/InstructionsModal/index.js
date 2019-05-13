import React from 'react'





function InstructionModal() {
    return (
        <div>
            <button id= 'instBox' type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Melee Instructions
</button>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">

                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">



                            <a class="btn btn-primary" href="http://bluwiki.com/go/Tft-melee" target="_blank" role="button">Melee Instructions</a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InstructionModal
