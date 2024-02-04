function c() { return { collapsedGroups: [], isLoading: !1, selectedRecords: [], shouldCheckUniqueSelection: !0, init: function () { this.$wire.$on("deselectAllTableRecords", () => this.deselectAllRecords()), this.$watch("selectedRecords", () => { if (!this.shouldCheckUniqueSelection) { this.shouldCheckUniqueSelection = !0; return } this.selectedRecords = [...new Set(this.selectedRecords)], this.shouldCheckUniqueSelection = !1 }) }, mountBulkAction: function (e) { this.$wire.set("selectedTableRecords", this.selectedRecords, !1), this.$wire.mountTableBulkAction(e) }, toggleSelectRecordsOnPage: function () { let e = this.getRecordsOnPage(); if (this.areRecordsSelected(e)) { this.deselectRecords(e); return } this.selectRecords(e) }, toggleSelectRecordsInGroup: async function (e) { if (this.isLoading = !0, this.areRecordsSelected(this.getRecordsInGroupOnPage(e))) { this.deselectRecords(await this.$wire.getGroupedSelectableTableRecordKeys(e)); return } this.selectRecords(await this.$wire.getGroupedSelectableTableRecordKeys(e)), this.isLoading = !1 }, getRecordsInGroupOnPage: function (e) { let s = []; for (let t of this.$root.getElementsByClassName("fi-ta-record-checkbox")) t.dataset.group === e && s.push(t.value); return s }, getRecordsOnPage: function () { let e = []; for (let s of this.$root.getElementsByClassName("fi-ta-record-checkbox")) e.push(s.value); return e }, selectRecords: function (e) { for (let s of e) this.isRecordSelected(s) || this.selectedRecords.push(s) }, deselectRecords: function (e) { for (let s of e) { let t = this.selectedRecords.indexOf(s); t !== -1 && this.selectedRecords.splice(t, 1) } }, selectAllRecords: async function () { this.isLoading = !0, this.selectedRecords = await this.$wire.getAllSelectableTableRecordKeys(), this.isLoading = !1 }, deselectAllRecords: function () { this.selectedRecords = [] }, isRecordSelected: function (e) { return this.selectedRecords.includes(e) }, areRecordsSelected: function (e) { return e.every(s => this.isRecordSelected(s)) }, toggleCollapseGroup: function (e) { if (this.isGroupCollapsed(e)) { this.collapsedGroups.splice(this.collapsedGroups.indexOf(e), 1); return } this.collapsedGroups.push(e) }, isGroupCollapsed: function (e) { return this.collapsedGroups.includes(e) }, resetCollapsedGroups: function () { this.collapsedGroups = [] } } } export { c as default };
