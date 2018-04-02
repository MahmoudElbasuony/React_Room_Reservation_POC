using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Integrant.MRR.BL;
using Integrant.MRR.DAL.Models;
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

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                return Json(await meetingRoomManager.GetAllMeetingRooms());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]MeetingRoom meetingRoom)
        {
        
            if (ModelState.IsValid)
            {
                try
                {
                    return Json(await meetingRoomManager.CreateMeetingRoom(meetingRoom));
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult> Delete(string Id)
        {
            try
            {
                var meetingRoom = await meetingRoomManager.GetMeetingRoomById(Id);
                if (meetingRoom != null)
                {
                    await meetingRoomManager.DeleteMeetingRoom(meetingRoom);
                    return Ok();
                }
                else
                    return NotFound("Meeting room not found");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}