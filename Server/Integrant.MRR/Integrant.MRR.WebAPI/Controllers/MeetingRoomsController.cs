using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Integrant.MRR.BL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Serialization;

namespace Integrant.MRR.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/MeetingRooms")]
    public class MeetingRoomsController : Controller
    {
        private readonly MeetingRoomManager meetingRoomManager = new MeetingRoomManager();

        [HttpGet("")]
        public async Task<ActionResult> GetAllMeetingRooms()
        {
            try
            {
                 
                return Json(await meetingRoomManager.GetAllMeetingRooms() );
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        
    }
}