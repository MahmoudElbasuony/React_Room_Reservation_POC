using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Integrant.MRR.BL;
using Integrant.MRR.DAL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Integrant.MRR.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Reservation")]
    public class ReservationController : Controller
    {

        private readonly ReservationManager reservationManager = new ReservationManager();

        [HttpGet("{MeetingRoomId}")]
        public async Task<ActionResult> Get(string MeetingRoomId)
        {
            try
            {
                return Json(await reservationManager.GetAllReservationsWhen(rs => rs.MeetingRoomCode == MeetingRoomId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]Reservation reservation)
        {

            if (ModelState.IsValid)
            {
                try
                {
                    return Json(await reservationManager.CreateReservation(reservation));
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{Id}/{IsApprove}")]
        public async Task<ActionResult> Put(string Id, bool IsApprove)
        {
            try
            {
                return Json(await reservationManager.ApproveReservation(IsApprove, Id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult> Delete(string Id)
        {
            try
            {
                var reservation = await reservationManager.GetReservationById(Id);
                if (reservation != null)
                {
                    await reservationManager.DeleteReservation(reservation);
                    return Ok();
                }
                else
                    return NotFound("Reservation not found");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}