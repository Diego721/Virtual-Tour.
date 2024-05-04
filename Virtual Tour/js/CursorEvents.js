RTCEncodedAudioFrame.registerComponents("cursor-listener",{
    schema:{
        selectedItemId: {default: "", type: "string"},
    },
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
      },
    handlePlacesListState: function(){
        const id = this.el.getAtribute("id");
        const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"]
        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container")
            placeContainer.serAtribute("cursor-listener",{
                selectedItemId: id,
            })
            this.el.serAtribute("material", {
                color: "#D76B30",
                opacity: 1
            })
        }
    },
    handleMouseEvent: function(){
        //evento mouse enter en el cursor
        this.el.addEventListener("mouseenter", () => {
            this.handlePlacesListState();
        })
    },
    handleMouseLeaveEvents: function(){
     // Evento 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    }
})