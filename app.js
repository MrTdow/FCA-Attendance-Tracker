const STORAGE_KEY = "fca-attendance-tracker-v1";
const ATTENDANCE_SEED_VERSION = "fca-attendance-count-sheet-2026-05-01-exact-cells";

const spreadsheetSeedDates = [
  "2025-08-22", "2025-08-29", "2025-09-04", "2025-09-18", "2025-09-25",
  "2025-10-02", "2025-10-10", "2025-10-24", "2025-10-31", "2025-11-06",
  "2025-11-14", "2025-11-21", "2025-12-05", "2025-12-12", "2025-12-18",
  "2026-01-09", "2026-01-16", "2026-01-23", "2026-02-11", "2026-02-20",
  "2026-02-27", "2026-03-06", "2026-03-12", "2026-03-20", "2026-04-10",
  "2026-04-17", "2026-04-24"
];

const seedDates = spreadsheetSeedDates;

const seedFoodDates = [
  "2026-08-21", "2026-08-28", "2026-09-04", "2026-09-11", "2026-09-25",
  "2026-10-02", "2026-10-09", "2026-10-23", "2026-10-30",
  "2026-11-06", "2026-11-13", "2026-11-20",
  "2026-12-04", "2026-12-11", "2026-12-18",
  "2027-01-08", "2027-01-15", "2027-01-22", "2027-01-29",
  "2027-02-05", "2027-02-19", "2027-02-26",
  "2027-03-05", "2027-03-12", "2027-03-19",
  "2027-04-09", "2027-04-23", "2027-04-30",
  "2027-05-07", "2027-05-14", "2027-05-21"
];

const schoolOffFoodDates = new Set([
  "2026-09-18", "2026-10-16", "2026-11-27", "2026-12-25",
  "2027-01-01", "2027-02-12", "2027-03-26", "2027-04-16"
]);

const spreadsheetSeedRows = [
  ["Addison S", "0100000FTTTTTTTTTTTTFFTFFFF"],
  ["Adrian A", "0000011FTTTTFTTTTFTTTTTTFFF"],
  ["Alivia E", "0100110FFFFFFFFFFFFFFFFFFFF"],
  ["Amelia W", "0000000FFFFFFFTFFFFFFFFFFFF"],
  ["Andrew J", "1100000FFFTFFFFFFFFFFFFFFFF"],
  ["Ayden S", "0000100FFFFFFFFFFFFFFFFFFFF"],
  ["Ben S", "0000100FFFFFFFFFFFFFFFFFFFF"],
  ["Bentley W", "1111101TTTTFTTTTFTFTTTTTFTT"],
  ["Bradley S", "0000111FTTTTFTTTTTTTFTTTFFF"],
  ["Braelyn F", "0000011TTTFTTTFTTTTFTTFTFFF"],
  ["Brayleigh H", "1111111TTFTFTTTTTTFTTTTTTFF"],
  ["Bryan H", "0000000FFFTTTTTTTTTFTTTTFTT"],
  ["Brycen M", "0010111TTFTTFFFFFFFFFFTFFFF"],
  ["Buckston J", "1111111TTTFFFTTTTFFFFFFFFFF"],
  ["Caden B", "0000000FTFFFFFFFFFFFFFFFFFF"],
  ["Cadence R", "0000110TTFFFFTFFFFFFTFFFFFF"],
  ["Caleb M", "1110110FFFTTTFTTTTTTTTFFFFT"],
  ["Cameron B", "1111001TTTTTTTTTTTTFTFFFFFF"],
  ["Campbell F", "0000100FFFFFFFFFFFFFFFFFFFF"],
  ["Camren S", "0000010FFTFFFFFFFFFFFFFFFFF"],
  ["Carter J", "0000111FFFFFFFTFFFTFFFTTFFF"],
  ["Charlotte M", "1111111FTTTFTTTTTTTTTTFTFTT"],
  ["Chia L", "1110111TFTTTTTTTTTFFTTFFTTF"],
  ["Cody W", "0000110FFFTTTFTTTTFFFTFTTFF"],
  ["Colton S", "1111111TFFTTTTTTTFTTTTFTTFF"],
  ["Conner W", "1100000FFFFFFFFFFFFFFFFFFFF"],
  ["Courtney B", "0000011FFFFFFFFFFFFFFFFFFFF"],
  ["Creighton L", "0001000FFFTTTTTTTTTTFTFTFFF"],
  ["Dawson S", "0000000FFFFFFFFFFFTTTFFTFTF"],
  ["Elle M", "1111111TTTTTTTTTTTTFTFTTTTT"],
  ["Ethan M", "0111110FTTFTTFTFTFTTTFTFFTT"],
  ["Evan M", "1100110TFTTTTTTTTTTFFTTTFTT"],
  ["Franklin M", "1111011FTTTFTTTTTFTTTTFTFTF"],
  ["Gracie W", "1101001TTTTTTTTTTTTTFTTTTFF"],
  ["Hailey W", "0001111TFFTTTFTFTTFTTFFFFFF"],
  ["Isabella B", "0001111TTTTTTTTTTTTTTTTFFTT"],
  ["Jake W", "0000000TFFFFFFFFFFFFFFFFFFF"],
  ["Janessa S", "0000010FFFFFFFFFFFFFFFFFFFF"],
  ["Jett S", "1111011TTTTTTTTTTTTTTTTTTFF"],
  ["Jhonny M", "1011111TFTTFFTTTTFTFTFFFFFF"],
  ["Jocelynn P", "1011111TFTFTTTTFTFTFFFFFFFF"],
  ["John L", "0000000FFFFFFFTFFFFFTFTFFFF"],
  ["Johnathan A", "1000000FFFFFFTFTTTTFTFTFFFT"],
  ["Joshua S", "0101111TTTTTTFTTTTTFTFTFFFT"],
  ["Judah O", "0011111TFFFFFFFFFFFFFFFFFFT"],
  ["Kaisen K", "1001111TFFTFTFTFTFFFFFFFFFF"],
  ["Kami P", "1001111TFTTTTTTTTTTTTTFTFTT"],
  ["Kaydence R", "0000000FFFFFFFFFTFTFTTFFFFF"],
  ["Khloe R", "1000001TTTTTTTFTTTTTTTFTFTF"],
  ["Khloie E", "0000100FFFFFFFFFFFFFFFFFFFF"],
  ["Lane S", "0100111TTTTTTTTTTTTTTTFFFFT"],
  ["Leah G", "0110110FFFFFFFFFFFFFFFFFFFF"],
  ["Lexi F", "0001001TTTTTFTTTTFTTTTTTFTT"],
  ["Lillian G", "0000000FTFFFFFTFFFFFFFFFFFF"],
  ["Lily B", "1011111TTFTTTTTTTTTFTFTTTFF"],
  ["Lincoln F", "1111011FFTTTFTFFFFFFFTTFFFF"],
  ["Lucas S", "0101110FTFFTFFFTFFFFFFFTFFT"],
  ["Lyra B", "1000000FFFFFFFFFFFFFFFFFFFF"],
  ["Maddison H", "0100001TTTTTTTFTTFFFTTFTFTF"],
  ["Madison B", "0000110FTTTTTTFTTTTTFTTTFTT"],
  ["Max R", "0000000FFTTTTTTTTTTTTTTFFFT"],
  ["Micah W", "0000000FFFFFFFTTTTTTTTFFFFF"],
  ["Morgan S", "0000010TFTFTFFFFFTFTFTFFFFF"],
  ["Nathan M", "0000011FTFFTFFTFFFFFFFFFFFF"],
  ["Nevaeh M", "1111011TTTTTTTTTTTFFFFFFFFF"],
  ["Nicholas G", "0000000FFTFFFFFFFFFFFFFFFFF"],
  ["Parker H", "1011101TTFFTTFTFTTTTFFTFFFF"],
  ["Rhein D", "0000010FFFFFFFFFFFFFFFFFFFF"],
  ["Rylee G", "0100001TTTTTTTTTTTTFFTTTTFF"],
  ["Sam G", "1011011TFFTTTTTTTTTTTTFTFFF"],
  ["Trent J", "1011101TFTTTTTFTTTTTTFFTTFF"],
  ["Trey Y", "0000000FTFFFFFFFFFFFFFFFFFF"],
  ["Trinity W", "1101000FFTFFFFFFFFFFFFFFFFF"],
  ["Tristan E", "1111110TTTTTTTTTFTTTTTTTFTT"],
  ["Tucker H", "1101101TFTTTTTTFTTTTTTFTTFF"],
  ["Van N", "1111111TTTTTTTTTTTTFFTTTFTT"],
  ["Vanessa D", "0000000FFFFFFFFFFTTTTFFFFFF"],
  ["Walker B", "0011011TTTTTTTTTTFTTTTTTTTT"],
  ["Waylan A", "1110111TTTTTFFFTFFFFFFFTTFF"],
  ["Weston G", "1101101TTTTTTTTTTTFTTTTTFTT"],
  ["Will H", "1111111TTTFTTTTTTTTTTTTTTTT"],
  ["Zane K", "1110111TTFTTTTTTTTTFTTTFTFF"],
  ["Zane W", "0001111FFTFTTTTFTTFTTFFFTFF"],
  ["Zaylynne Neuhart", "0000000FFFFFTTFTTFTTTFTTFFF"],
  ["Zoey C", "1000000FFFFFFTFFTTTFTTFFFFF"]
];

const seedNames = spreadsheetSeedRows.map(([name]) => name);

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let state = loadState();

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  bindElements();
  wireEvents();
  render();
});

function bindElements() {
  [
    "studentCount", "meetingCount", "latestCount", "averageCount", "meetingSelect",
    "attendanceList", "studentSearch", "currentMeetingMeta", "toolbarPresentCount",
    "keyboardHint", "studentTable", "meetingTable", "quickStudentNameInput",
    "quickStudentPresentInput", "studentNameInput", "meetingDateInput", "meetingNoteInput",
    "dashboardMeta", "insightGrid", "leaderboardMeta", "podiumList", "leaderboardTable",
    "topStudents", "lowStudents", "watchlistMeta", "missingWatchlist", "reportStatsMeta",
    "reportStatsTable", "foodSignupMeta", "foodDateInput", "foodDateNoteInput",
    "donationEventSelect", "donorNameInput", "foodItemInput", "servingsInput",
    "donorContactInput", "donationNotesInput", "foodSignupList", "saveToast"
  ].forEach(id => {
    els[id] = document.getElementById(id);
  });
  els.tabs = document.querySelectorAll(".tab");
  els.views = document.querySelectorAll(".view");
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      const normalized = normalizeState(parsed);
      if (normalized.attendanceSeedVersion !== parsed.attendanceSeedVersion) {
        normalized.lastSavedAt = new Date().toISOString();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      }
      return normalized;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  return createSeedState();
}

function createSeedState() {
  const meetings = seedDates.map(date => ({
    id: `meeting-${date}`,
    date,
    note: isFriday(date) ? "" : "Switched from Friday"
  }));
  const students = spreadsheetSeedRows.map(([name, pattern]) => {
    const attendance = {};
    meetings.forEach((meeting, index) => {
      attendance[meeting.id] = isPresentValue(pattern[index]);
    });
    return { id: makeId("student"), name, attendance };
  });
  return {
    meetings,
    students,
    foodEvents: createSeedFoodEvents(),
    donations: [],
    selectedMeetingId: meetings.at(-1)?.id || "",
    selectedStudentId: students[0]?.id || "",
    todayMode: false,
    lastSavedAt: "",
    attendanceSeedVersion: ATTENDANCE_SEED_VERSION
  };
}

function normalizeState(raw) {
  const meetings = Array.isArray(raw.meetings) ? raw.meetings : [];
  const students = Array.isArray(raw.students) ? raw.students : [];
  const rawFoodEvents = Array.isArray(raw.foodEvents) ? raw.foodEvents : createSeedFoodEvents();
  const removedFoodEventIds = new Set(rawFoodEvents.filter(event => schoolOffFoodDates.has(event.date)).map(event => event.id));
  const foodEvents = rawFoodEvents.filter(event => !schoolOffFoodDates.has(event.date));
  const donations = Array.isArray(raw.donations)
    ? raw.donations.filter(donation => !removedFoodEventIds.has(donation.eventId))
    : [];
  students.forEach(student => {
    if (!student.attendance || typeof student.attendance !== "object") student.attendance = {};
    meetings.forEach(meeting => {
      if (!(meeting.id in student.attendance)) student.attendance[meeting.id] = false;
    });
  });
  const normalized = {
    meetings,
    students,
    foodEvents,
    donations,
    selectedMeetingId: raw.selectedMeetingId || meetings.at(-1)?.id || "",
    selectedStudentId: raw.selectedStudentId || students[0]?.id || "",
    todayMode: Boolean(raw.todayMode),
    lastSavedAt: raw.lastSavedAt || "",
    attendanceSeedVersion: raw.attendanceSeedVersion || ""
  };
  if (normalized.attendanceSeedVersion !== ATTENDANCE_SEED_VERSION) {
    applySpreadsheetAttendanceSeed(normalized);
  }
  return normalized;
}

function applySpreadsheetAttendanceSeed(targetState) {
  const meetingByDate = new Map(targetState.meetings.map(meeting => [meeting.date, meeting]));
  spreadsheetSeedDates.forEach(date => {
    if (!meetingByDate.has(date)) {
      const meeting = { id: `meeting-${date}`, date, note: isFriday(date) ? "" : "Switched from Friday" };
      targetState.meetings.push(meeting);
      meetingByDate.set(date, meeting);
    }
  });
  targetState.meetings.sort((a, b) => a.date.localeCompare(b.date));

  const studentByName = new Map(targetState.students.map(student => [student.name.toLowerCase(), student]));
  spreadsheetSeedRows.forEach(([name, pattern]) => {
    let student = studentByName.get(name.toLowerCase());
    if (!student) {
      student = { id: makeId("student"), name, attendance: {} };
      targetState.students.push(student);
      studentByName.set(name.toLowerCase(), student);
    }
    if (!student.attendance || typeof student.attendance !== "object") student.attendance = {};
    spreadsheetSeedDates.forEach((date, index) => {
      const meeting = meetingByDate.get(date);
      student.attendance[meeting.id] = isPresentValue(pattern[index]);
    });
  });
  targetState.students.forEach(student => {
    if (!student.attendance || typeof student.attendance !== "object") student.attendance = {};
    targetState.meetings.forEach(meeting => {
      if (!(meeting.id in student.attendance)) student.attendance[meeting.id] = false;
    });
  });
  targetState.attendanceSeedVersion = ATTENDANCE_SEED_VERSION;
}

function isPresentValue(value) {
  return value === "1" || value === "T";
}

function createSeedFoodEvents() {
  return seedFoodDates.map(date => ({
    id: `food-${date}`,
    date,
    note: ""
  }));
}

function saveState() {
  state.lastSavedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  showSaved();
}

function wireEvents() {
  els.tabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  els.meetingSelect.addEventListener("change", event => {
    state.selectedMeetingId = event.target.value;
    saveState();
    render();
  });
  els.studentSearch.addEventListener("input", renderAttendanceList);
  document.getElementById("todayModeBtn").addEventListener("click", toggleTodayMode);
  document.getElementById("addTodayBtn").addEventListener("click", () => addMeeting(toInputDate(new Date()), ""));
  document.getElementById("markAllBtn").addEventListener("click", () => setAllForCurrentMeeting(true));
  document.getElementById("clearAllBtn").addEventListener("click", () => setAllForCurrentMeeting(false));
  document.getElementById("quickAddStudentForm").addEventListener("submit", addQuickStudent);
  document.getElementById("addStudentForm").addEventListener("submit", addStudent);
  document.getElementById("addMeetingForm").addEventListener("submit", addMeetingFromForm);
  document.getElementById("addFoodDateForm").addEventListener("submit", addFoodDateFromForm);
  document.getElementById("donationForm").addEventListener("submit", addDonation);
  document.getElementById("backupBtn").addEventListener("click", downloadBackup);
  document.getElementById("restoreInput").addEventListener("change", restoreBackup);
  document.getElementById("resetBtn").addEventListener("click", resetTracker);
  document.getElementById("copyCsvBtn").addEventListener("click", copyCsv);
  document.getElementById("downloadCsvBtn").addEventListener("click", downloadCsv);
  document.getElementById("copyFoodCsvBtn").addEventListener("click", copyFoodCsv);
  document.getElementById("downloadFoodCsvBtn").addEventListener("click", downloadFoodCsv);
  document.addEventListener("keydown", handleKeyboard);
}

function switchView(viewName) {
  els.tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === viewName));
  els.views.forEach(view => view.classList.toggle("active-view", view.id === `${viewName}View`));
}

function render() {
  ensureSelectedMeeting();
  ensureSelectedStudent();
  document.body.classList.toggle("today-mode", state.todayMode);
  renderSummary();
  renderMeetingSelect();
  renderAttendanceList();
  renderDashboard();
  renderLeaderboard();
  renderStudents();
  renderMeetings();
  renderFoodSignups();
  renderReports();
  showSaved(false);
}

function ensureSelectedMeeting() {
  if (!state.meetings.some(meeting => meeting.id === state.selectedMeetingId)) {
    state.selectedMeetingId = state.meetings.at(-1)?.id || "";
  }
}

function ensureSelectedStudent() {
  if (!state.students.some(student => student.id === state.selectedStudentId)) {
    state.selectedStudentId = getVisibleStudents()[0]?.id || state.students[0]?.id || "";
  }
}

function renderSummary() {
  const latest = state.meetings.at(-1);
  const latestCount = latest ? countForMeeting(latest.id) : 0;
  const average = averageAttendancePerMeeting();
  els.studentCount.textContent = state.students.length;
  els.meetingCount.textContent = state.meetings.length;
  els.latestCount.textContent = latestCount;
  els.averageCount.textContent = average;
}

function renderMeetingSelect() {
  els.meetingSelect.innerHTML = state.meetings.map(meeting => `<option value="${meeting.id}">${formatDate(meeting.date)}</option>`).join("");
  els.meetingSelect.value = state.selectedMeetingId;
  const meeting = currentMeeting();
  if (!meeting) return;
  const count = countForMeeting(meeting.id);
  const day = dayNames[new Date(`${meeting.date}T12:00:00`).getDay()];
  els.toolbarPresentCount.textContent = count;
  els.currentMeetingMeta.textContent = `${count} present on ${day}${meeting.note ? ` - ${meeting.note}` : ""}`;
  document.getElementById("todayModeBtn").textContent = state.todayMode ? "Exit Today Mode" : "Today Mode";
}

function renderAttendanceList() {
  const meeting = currentMeeting();
  if (!meeting) {
    els.attendanceList.innerHTML = "";
    return;
  }
  els.attendanceList.innerHTML = "";
  getVisibleStudents().forEach(student => {
    const stats = studentStats(student);
    const present = Boolean(student.attendance[meeting.id]);
    const button = document.createElement("button");
    button.className = `student-toggle student-tile ${present ? "present" : "absent"} ${student.id === state.selectedStudentId ? "selected" : ""}`;
    button.type = "button";
    button.dataset.studentId = student.id;
    button.innerHTML = `
      <span class="student-main">
        <strong class="student-name">${escapeHtml(student.name)}</strong>
        <small>${stats.total} attended - ${stats.percent}% - streak ${stats.currentStreak}</small>
      </span>
      <span class="attendance-pill">${present ? "Present" : "Absent"}</span>
      <span class="tile-badges">${badgesForStudent(stats).map(badge => `<span class="badge">${badge}</span>`).join("")}</span>
    `;
    button.addEventListener("click", () => {
      state.selectedStudentId = student.id;
      toggleAttendance(student.id, meeting.id);
    });
    els.attendanceList.append(button);
  });
}

function getVisibleStudents() {
  const term = els.studentSearch?.value?.trim().toLowerCase() || "";
  return state.students
    .filter(student => student.name.toLowerCase().includes(term))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderDashboard() {
  const stats = state.students.map(studentStats);
  const below50 = stats.filter(item => item.percent < 50);
  const missedLast3 = stats.filter(item => item.missedLastThree);
  const onStreak = stats.filter(item => item.currentStreak > 0);
  const perfect = stats.filter(item => item.perfect && state.meetings.length > 0);
  const highest = meetingExtremes("high");
  const lowest = meetingExtremes("low");
  els.dashboardMeta.textContent = `${state.students.length} students - ${state.meetings.length} meetings`;
  els.insightGrid.innerHTML = [
    insightCard("Below 50%", below50, item => `${item.name} (${item.percent}%)`),
    insightCard("Missed Last 3", missedLast3, item => item.name),
    insightCard("On a Streak", onStreak, item => `${item.name} (${item.currentStreak})`),
    insightCard("Perfect Attendance", perfect, item => item.name),
    metricCard("Average Per Meeting", averageAttendancePerMeeting()),
    metricCard("Highest Date", highest ? `${formatDate(highest.date)} (${highest.count})` : "None"),
    metricCard("Lowest Date", lowest ? `${formatDate(lowest.date)} (${lowest.count})` : "None")
  ].join("");
}

function insightCard(title, items, formatter) {
  const body = items.length
    ? `<ul>${items.slice(0, 8).map(item => `<li>${escapeHtml(formatter(item))}</li>`).join("")}</ul>`
    : `<p class="empty-state">None right now.</p>`;
  return `<article class="insight-card"><h3>${title}</h3>${body}</article>`;
}

function metricCard(title, value) {
  return `<article class="insight-card metric-card"><h3>${title}</h3><strong>${escapeHtml(value)}</strong></article>`;
}

function renderLeaderboard() {
  const ranked = leaderboardRows();
  const topThree = ranked.slice(0, 3);
  els.leaderboardMeta.textContent = ranked[0]
    ? `Leading streak: ${ranked[0].currentStreak} - ${ranked[0].percent}% attendance`
    : "Add students to start the leaderboard";
  els.podiumList.innerHTML = topThree.map((item, index) => `<article class="podium-card rank-${index + 1}">
    <span class="rank-badge">#${index + 1}</span>
    <strong>${escapeHtml(item.name)}</strong>
    <span>${item.currentStreak} current streak</span>
    <small>${item.percent}% attendance - ${item.total} total</small>
    <div class="tile-badges">${badgesForStudent(item).map(badge => `<span class="badge">${badge}</span>`).join("")}</div>
  </article>`).join("");
  els.leaderboardTable.innerHTML = `<table>
    <thead><tr><th>Rank</th><th>Student</th><th>Current streak</th><th>Attendance %</th><th>Total</th><th>Badges</th></tr></thead>
    <tbody>${ranked.map((item, index) => `<tr>
      <td>${index + 1}</td><td>${escapeHtml(item.name)}</td><td><strong>${item.currentStreak}</strong></td>
      <td>${item.percent}%</td><td>${item.total}</td>
      <td>${badgesForStudent(item).map(badge => `<span class="badge">${badge}</span>`).join(" ")}</td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function renderStudents() {
  const rows = state.students.slice().sort((a, b) => a.name.localeCompare(b.name)).map(student => {
    const stats = studentStats(student);
    return `<tr>
      <td>${escapeHtml(stats.name)}</td><td>${stats.total}</td><td>${stats.percent}%</td>
      <td>${stats.currentStreak}</td><td>${stats.longestStreak}</td>
      <td>${stats.lastAttended ? formatDate(stats.lastAttended) : "Never"}</td><td>${stats.missed}</td>
      <td>${badgesForStudent(stats).map(badge => `<span class="badge">${badge}</span>`).join(" ")}</td>
      <td>
        <div class="row-actions">
          <button class="small-btn" type="button" data-edit-student="${stats.id}">Edit</button>
          <button class="small-btn" type="button" data-remove-student="${stats.id}">Remove</button>
        </div>
      </td>
    </tr>`;
  }).join("");
  els.studentTable.innerHTML = `<table>
    <thead><tr><th>Student</th><th>Total</th><th>%</th><th>Current</th><th>Longest</th><th>Last attended</th><th>Missed</th><th>Badges</th><th></th></tr></thead>
    <tbody>${rows}</tbody>
  </table>`;
  els.studentTable.querySelectorAll("[data-edit-student]").forEach(button => {
    button.addEventListener("click", () => editStudentName(button.dataset.editStudent));
  });
  els.studentTable.querySelectorAll("[data-remove-student]").forEach(button => {
    button.addEventListener("click", () => removeStudent(button.dataset.removeStudent));
  });
}

function renderMeetings() {
  const rows = state.meetings.slice().sort((a, b) => b.date.localeCompare(a.date)).map(meeting => {
    const day = dayNames[new Date(`${meeting.date}T12:00:00`).getDay()];
    return `<tr>
      <td>${formatDate(meeting.date)}</td><td>${day}</td><td>${countForMeeting(meeting.id)}</td>
      <td>${escapeHtml(meeting.note || "")}</td>
      <td><button class="small-btn" type="button" data-remove-meeting="${meeting.id}">Remove</button></td>
    </tr>`;
  }).join("");
  els.meetingTable.innerHTML = `<table><thead><tr><th>Date</th><th>Day</th><th>Present</th><th>Note</th><th></th></tr></thead><tbody>${rows}</tbody></table>`;
  els.meetingTable.querySelectorAll("[data-remove-meeting]").forEach(button => {
    button.addEventListener("click", () => removeMeeting(button.dataset.removeMeeting));
  });
}

function renderFoodSignups() {
  const sortedEvents = state.foodEvents.slice().sort((a, b) => a.date.localeCompare(b.date));
  if (!sortedEvents.length) {
    els.foodSignupMeta.textContent = "Add FCA dates to start the food sign-up.";
    els.donationEventSelect.innerHTML = "";
    els.foodSignupList.innerHTML = `<p class="empty-state">No food sign-up dates yet.</p>`;
    return;
  }
  const nextOpen = sortedEvents.find(event => donationsForEvent(event.id).length === 0);
  const neededCount = sortedEvents.filter(event => donationsForEvent(event.id).length === 0).length;
  els.foodSignupMeta.textContent = nextOpen
    ? `${neededCount} date${neededCount === 1 ? "" : "s"} need a donor - next open: ${formatDate(nextOpen.date)}`
    : "All listed FCA dates are covered";
  els.donationEventSelect.innerHTML = sortedEvents.map(event => `<option value="${event.id}">${formatDate(event.date)}${event.note ? ` - ${escapeHtml(event.note)}` : ""}</option>`).join("");
  if (nextOpen) els.donationEventSelect.value = nextOpen.id;
  els.foodSignupList.innerHTML = sortedEvents.map(event => foodDateCard(event)).join("");
  els.foodSignupList.querySelectorAll("[data-remove-donation]").forEach(button => {
    button.addEventListener("click", () => removeDonation(button.dataset.removeDonation));
  });
  els.foodSignupList.querySelectorAll("[data-remove-food-event]").forEach(button => {
    button.addEventListener("click", () => removeFoodEvent(button.dataset.removeFoodEvent));
  });
  els.foodSignupList.querySelectorAll("[data-copy-parent-message]").forEach(button => {
    button.addEventListener("click", () => copyParentMessage(button.dataset.copyParentMessage));
  });
}

function foodDateCard(event) {
  const donations = donationsForEvent(event.id);
  const covered = donations.length > 0;
  const day = dayNames[new Date(`${event.date}T12:00:00`).getDay()];
  const donationRows = covered
    ? donations.map(donation => `<li>
        <strong>${escapeHtml(donation.foodItem)}</strong>
        <span>${escapeHtml(donation.donorName)}${donation.servings ? ` - serves ${escapeHtml(donation.servings)}` : ""}</span>
        ${donation.contact ? `<small>Contact: ${escapeHtml(donation.contact)}</small>` : ""}
        ${donation.notes ? `<small>${escapeHtml(donation.notes)}</small>` : ""}
        <button class="small-btn" type="button" data-remove-donation="${donation.id}">Remove</button>
      </li>`).join("")
    : `<li class="empty-state">No food donor yet.</li>`;
  return `<article class="food-date-card ${covered ? "covered" : "needs-donor"}">
    <div class="food-date-header">
      <div><h3>${formatDate(event.date)}</h3><span>${day}${event.note ? ` - ${escapeHtml(event.note)}` : ""}</span></div>
      <strong>${covered ? "Covered" : "Needs Donor"}</strong>
    </div>
    <ul>${donationRows}</ul>
    <div class="food-card-actions">
      <button class="small-btn" type="button" data-copy-parent-message="${event.id}">Copy Parent Message</button>
      <button class="small-btn" type="button" data-remove-food-event="${event.id}">Remove date</button>
    </div>
  </article>`;
}

function renderReports() {
  const stats = state.students.map(studentStats).sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
  els.topStudents.innerHTML = stats.slice(0, 10).map(item => `<li>${escapeHtml(item.name)} - ${item.total}</li>`).join("");
  els.lowStudents.innerHTML = stats.slice(-10).reverse().map(item => `<li>${escapeHtml(item.name)} - ${item.total}</li>`).join("");
  renderMissingWatchlist();
  els.reportStatsMeta.textContent = `${stats.length} students`;
  els.reportStatsTable.innerHTML = `<table>
    <thead><tr><th>Student</th><th>Total</th><th>Missed</th><th>%</th><th>Current</th><th>Longest</th><th>Last attended</th><th>Badges</th></tr></thead>
    <tbody>${stats.map(item => `<tr>
      <td>${escapeHtml(item.name)}</td><td>${item.total}</td><td>${item.missed}</td><td>${item.percent}%</td>
      <td>${item.currentStreak}</td><td>${item.longestStreak}</td>
      <td>${item.lastAttended ? formatDate(item.lastAttended) : "Never"}</td>
      <td>${badgesForStudent(item).map(badge => `<span class="badge">${badge}</span>`).join(" ")}</td>
    </tr>`).join("")}</tbody>
  </table>`;
}

function renderMissingWatchlist() {
  const watched = state.students.map(studentStats)
    .filter(item => item.missedLatest || item.missedStreak >= 2 || item.missedLastThree)
    .sort((a, b) => b.missedStreak - a.missedStreak || b.missedRecent - a.missedRecent || b.total - a.total);
  els.watchlistMeta.textContent = `Based on the most recent ${Math.min(3, state.meetings.length)} meeting${Math.min(3, state.meetings.length) === 1 ? "" : "s"}`;
  els.missingWatchlist.innerHTML = watched.length
    ? watched.map(item => `<section class="watchlist-item"><div><strong>${escapeHtml(item.name)}</strong><span>${missReason(item)}</span></div><small>${item.total} total</small></section>`).join("")
    : `<p class="empty-state">No one is currently flagged for recent missed meetings.</p>`;
}

function missReason(item) {
  if (item.missedStreak >= 2) return `Missed ${item.missedStreak} in a row`;
  if (item.missedLatest) return "Missed the latest meeting";
  return `Missed ${item.missedRecent} of the last 3`;
}

function studentStats(student) {
  const total = totalForStudent(student);
  const meetingCount = state.meetings.length;
  const missed = Math.max(0, meetingCount - total);
  const lastAttendedMeeting = state.meetings.slice().reverse().find(meeting => student.attendance[meeting.id]);
  const recent = state.meetings.slice(-3);
  const missedRecent = recent.filter(meeting => !student.attendance[meeting.id]).length;
  return {
    id: student.id,
    name: student.name,
    total,
    missed,
    percent: meetingCount ? Math.round((total / meetingCount) * 100) : 0,
    currentStreak: currentStreakForStudent(student),
    longestStreak: bestStreakForStudent(student),
    missedStreak: currentMissedStreakForStudent(student),
    missedLatest: state.meetings.at(-1) ? !student.attendance[state.meetings.at(-1).id] : false,
    missedRecent,
    missedLastThree: recent.length === 3 && missedRecent === 3,
    lastAttended: lastAttendedMeeting?.date || "",
    perfect: meetingCount > 0 && total === meetingCount,
    comeback: isComebackStudent(student)
  };
}

function badgesForStudent(stats) {
  const badges = [];
  if (stats.currentStreak >= 10) badges.push("10-week streak");
  else if (stats.currentStreak >= 5) badges.push("5-week streak");
  else if (stats.currentStreak >= 3) badges.push("3-week streak");
  if (stats.perfect) badges.push("Perfect");
  if (stats.comeback) badges.push("Comeback");
  return badges;
}

function isComebackStudent(student) {
  let misses = 0;
  let hadThreeMisses = false;
  for (const meeting of state.meetings) {
    if (student.attendance[meeting.id]) {
      if (hadThreeMisses) return true;
      misses = 0;
    } else {
      misses += 1;
      if (misses >= 3) hadThreeMisses = true;
    }
  }
  return false;
}

function leaderboardRows() {
  return state.students.map(studentStats)
    .sort((a, b) => b.currentStreak - a.currentStreak || b.percent - a.percent || b.total - a.total || a.name.localeCompare(b.name));
}

function currentMeeting() {
  return state.meetings.find(meeting => meeting.id === state.selectedMeetingId);
}

function toggleAttendance(studentId, meetingId) {
  const student = state.students.find(item => item.id === studentId);
  if (!student) return;
  student.attendance[meetingId] = !student.attendance[meetingId];
  saveState();
  render();
}

function setAllForCurrentMeeting(value) {
  const meeting = currentMeeting();
  if (!meeting) return;
  state.students.forEach(student => {
    student.attendance[meeting.id] = value;
  });
  saveState();
  render();
}

function addStudent(event) {
  event.preventDefault();
  const student = createStudent(els.studentNameInput.value.trim());
  if (student) els.studentNameInput.value = "";
}

function addQuickStudent(event) {
  event.preventDefault();
  const student = createStudent(els.quickStudentNameInput.value.trim(), { skipRender: true });
  if (!student) return;
  const meeting = currentMeeting();
  if (meeting && els.quickStudentPresentInput.checked) student.attendance[meeting.id] = true;
  els.quickStudentNameInput.value = "";
  els.studentSearch.value = "";
  saveState();
  render();
}

function createStudent(name, options = {}) {
  if (!name) return null;
  const existing = state.students.find(student => student.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    alert(`${existing.name} is already in the tracker.`);
    return null;
  }
  const attendance = {};
  state.meetings.forEach(meeting => {
    attendance[meeting.id] = false;
  });
  const student = { id: makeId("student"), name, attendance };
  state.students.push(student);
  state.selectedStudentId = student.id;
  if (!options.skipRender) {
    saveState();
    render();
  }
  return student;
}

function removeStudent(studentId) {
  const student = state.students.find(item => item.id === studentId);
  if (!student || !confirm(`Remove ${student.name}?`)) return;
  state.students = state.students.filter(item => item.id !== studentId);
  saveState();
  render();
}

function editStudentName(studentId) {
  const student = state.students.find(item => item.id === studentId);
  if (!student) return;
  const nextName = prompt("Edit student name", student.name);
  if (nextName === null) return;
  const trimmedName = nextName.trim();
  if (!trimmedName || trimmedName === student.name) return;
  const existing = state.students.find(item =>
    item.id !== studentId && item.name.toLowerCase() === trimmedName.toLowerCase()
  );
  if (existing) {
    alert(`${existing.name} is already in the tracker.`);
    return;
  }
  student.name = trimmedName;
  saveState();
  render();
}

function addMeetingFromForm(event) {
  event.preventDefault();
  addMeeting(els.meetingDateInput.value, els.meetingNoteInput.value.trim());
  els.meetingDateInput.value = "";
  els.meetingNoteInput.value = "";
}

function addMeeting(date, note) {
  if (!date || state.meetings.some(meeting => meeting.date === date)) return;
  const meeting = { id: makeId("meeting"), date, note };
  state.meetings.push(meeting);
  state.meetings.sort((a, b) => a.date.localeCompare(b.date));
  state.students.forEach(student => {
    student.attendance[meeting.id] = false;
  });
  state.selectedMeetingId = meeting.id;
  saveState();
  render();
}

function removeMeeting(meetingId) {
  const meeting = state.meetings.find(item => item.id === meetingId);
  if (!meeting || !confirm(`Remove ${formatDate(meeting.date)}?`)) return;
  state.meetings = state.meetings.filter(item => item.id !== meetingId);
  state.students.forEach(student => delete student.attendance[meetingId]);
  saveState();
  render();
}

function addFoodDateFromForm(event) {
  event.preventDefault();
  addFoodDate(els.foodDateInput.value, els.foodDateNoteInput.value.trim());
  els.foodDateInput.value = "";
  els.foodDateNoteInput.value = "";
}

function addFoodDate(date, note) {
  if (!date || state.foodEvents.some(event => event.date === date)) return;
  state.foodEvents.push({ id: makeId("food"), date, note });
  saveState();
  render();
}

function addDonation(event) {
  event.preventDefault();
  const eventId = els.donationEventSelect.value;
  const donorName = els.donorNameInput.value.trim();
  const foodItem = els.foodItemInput.value.trim();
  if (!eventId || !donorName || !foodItem) return;
  state.donations.push({
    id: makeId("donation"),
    eventId,
    donorName,
    foodItem,
    servings: els.servingsInput.value.trim(),
    contact: els.donorContactInput.value.trim(),
    notes: els.donationNotesInput.value.trim()
  });
  ["donorNameInput", "foodItemInput", "servingsInput", "donorContactInput", "donationNotesInput"].forEach(key => els[key].value = "");
  saveState();
  render();
}

function removeDonation(donationId) {
  const donation = state.donations.find(item => item.id === donationId);
  if (!donation || !confirm(`Remove ${donation.foodItem} from the food sign-up?`)) return;
  state.donations = state.donations.filter(item => item.id !== donationId);
  saveState();
  render();
}

function removeFoodEvent(eventId) {
  const event = state.foodEvents.find(item => item.id === eventId);
  if (!event || !confirm(`Remove ${formatDate(event.date)} from the food sign-up?`)) return;
  state.foodEvents = state.foodEvents.filter(item => item.id !== eventId);
  state.donations = state.donations.filter(item => item.eventId !== eventId);
  saveState();
  render();
}

function donationsForEvent(eventId) {
  return state.donations.filter(donation => donation.eventId === eventId);
}

function totalForStudent(student) {
  return state.meetings.reduce((total, meeting) => total + (student.attendance[meeting.id] ? 1 : 0), 0);
}

function countForMeeting(meetingId) {
  return state.students.filter(student => student.attendance[meetingId]).length;
}

function currentStreakForStudent(student) {
  let streak = 0;
  for (let index = state.meetings.length - 1; index >= 0; index -= 1) {
    if (!student.attendance[state.meetings[index].id]) break;
    streak += 1;
  }
  return streak;
}

function currentMissedStreakForStudent(student) {
  let streak = 0;
  for (let index = state.meetings.length - 1; index >= 0; index -= 1) {
    if (student.attendance[state.meetings[index].id]) break;
    streak += 1;
  }
  return streak;
}

function bestStreakForStudent(student) {
  let best = 0;
  let current = 0;
  state.meetings.forEach(meeting => {
    if (student.attendance[meeting.id]) {
      current += 1;
      best = Math.max(best, current);
    } else {
      current = 0;
    }
  });
  return best;
}

function averageAttendancePerMeeting() {
  if (!state.meetings.length) return 0;
  return Math.round(state.meetings.reduce((sum, meeting) => sum + countForMeeting(meeting.id), 0) / state.meetings.length);
}

function meetingExtremes(type) {
  if (!state.meetings.length) return null;
  return state.meetings
    .map(meeting => ({ date: meeting.date, count: countForMeeting(meeting.id) }))
    .sort((a, b) => type === "high" ? b.count - a.count || a.date.localeCompare(b.date) : a.count - b.count || a.date.localeCompare(b.date))[0];
}

function handleKeyboard(event) {
  const tag = event.target.tagName;
  if (["INPUT", "SELECT", "TEXTAREA"].includes(tag)) return;
  const students = getVisibleStudents();
  if (!students.length || !document.getElementById("takeView").classList.contains("active-view")) return;
  const currentIndex = Math.max(0, students.findIndex(student => student.id === state.selectedStudentId));
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();
    const meeting = currentMeeting();
    if (meeting) toggleAttendance(students[currentIndex].id, meeting.id);
  } else if (event.key === "Enter") {
    event.preventDefault();
    selectStudentByIndex(Math.min(students.length - 1, currentIndex + 1), students);
  } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    selectStudentByIndex(Math.min(students.length - 1, currentIndex + 1), students);
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    selectStudentByIndex(Math.max(0, currentIndex - 1), students);
  }
}

function selectStudentByIndex(index, students = getVisibleStudents()) {
  state.selectedStudentId = students[index]?.id || state.selectedStudentId;
  renderAttendanceList();
  document.querySelector(`[data-student-id="${state.selectedStudentId}"]`)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function toggleTodayMode() {
  state.todayMode = !state.todayMode;
  saveState();
  render();
}

function buildCsv() {
  const header = ["Student name", "Total meetings attended", "Total meetings missed", "Attendance percentage", "Current streak", "Longest streak", "Last attended date"];
  const rows = state.students.slice().sort((a, b) => a.name.localeCompare(b.name)).map(student => {
    const stats = studentStats(student);
    return [stats.name, stats.total, stats.missed, `${stats.percent}%`, stats.currentStreak, stats.longestStreak, stats.lastAttended ? formatDate(stats.lastAttended) : ""];
  });
  return [header, ...rows].map(row => row.map(csvCell).join(",")).join("\n");
}

function buildFoodCsv() {
  const header = ["FCA date", "Day", "Status", "Date note", "Donor", "Food or drink", "Serves", "Contact", "Notes"];
  const rows = state.foodEvents.slice().sort((a, b) => a.date.localeCompare(b.date)).flatMap(event => {
    const day = dayNames[new Date(`${event.date}T12:00:00`).getDay()];
    const donations = donationsForEvent(event.id);
    const status = donations.length ? "Covered" : "Needs Donor";
    if (!donations.length) return [[formatDate(event.date), day, status, event.note || "", "", "", "", "", ""]];
    return donations.map(donation => [formatDate(event.date), day, status, event.note || "", donation.donorName, donation.foodItem, donation.servings || "", donation.contact || "", donation.notes || ""]);
  });
  return [header, ...rows].map(row => row.map(csvCell).join(",")).join("\n");
}

function csvCell(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function copyCsv() {
  try {
    await navigator.clipboard.writeText(buildCsv());
  } catch {
    alert("Copy was blocked by the browser. Use Download CSV instead.");
  }
}

function downloadCsv() {
  downloadText("fca-attendance.csv", buildCsv(), "text/csv");
}

async function copyFoodCsv() {
  try {
    await navigator.clipboard.writeText(buildFoodCsv());
  } catch {
    alert("Copy was blocked by the browser. Use Download food CSV instead.");
  }
}

function downloadFoodCsv() {
  downloadText("fca-food-signup.csv", buildFoodCsv(), "text/csv");
}

async function copyParentMessage(eventId) {
  const event = state.foodEvents.find(item => item.id === eventId);
  if (!event) return;
  const message = `Hello! We still need food or drinks for FCA on ${formatLongDate(event.date)}. If you are willing to help, please let me know what you can bring. Thank you for supporting our students!`;
  try {
    await navigator.clipboard.writeText(message);
    showSaved(true, "Parent message copied");
  } catch {
    alert(message);
  }
}

function downloadBackup() {
  downloadText("fca-attendance-backup.json", JSON.stringify(state, null, 2), "application/json");
}

function restoreBackup(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
      saveState();
      render();
    } catch {
      alert("That backup file could not be read.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetTracker() {
  if (!confirm("Reset back to starter FCA data?")) return;
  state = createSeedState();
  saveState();
  render();
}

function downloadText(filename, text, type) {
  const blob = new Blob([text], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function showSaved(pulse = true, customText = "") {
  if (!els.saveToast) return;
  const text = customText || (state.lastSavedAt ? `Last saved ${formatTime(state.lastSavedAt)}` : "Not saved yet");
  els.saveToast.textContent = text;
  els.saveToast.classList.toggle("pulse", pulse);
  if (pulse) setTimeout(() => els.saveToast?.classList.remove("pulse"), 700);
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "2-digit" });
}

function formatLongDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function formatTime(iso) {
  return new Date(iso).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function toInputDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isFriday(date) {
  return new Date(`${date}T12:00:00`).getDay() === 5;
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

