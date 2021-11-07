import { readRosterFile } from './helpers/readRosterFile';
import { Create40kRoster } from "../src/roster40k";

describe("roster40k Create40kRoster", function() {
  it("loads BloodAngels test", function() {
    const doc = readRosterFile('test/BloodAngels test.ros');
    const roster = Create40kRoster(doc);

    expect(roster).toEqual(
      jasmine.objectContaining({
        '_powerLevel': 30,
        '_points': 625,
        '_commandPoints': 1,
        '_forces': [
          jasmine.objectContaining({'_units': [
            jasmine.objectContaining({
              '_name': 'Lieutenants',
              '_modelList': [
                'Lieutenant in Phobos Armour (Bolt pistol, Master-crafted occulus bolt rifle, Paired Combat Blades, Frag grenades, Krak grenades)',
                'Primaris Lieutenant (Bolt pistol, Neo-volkite pistol, Master-crafted power sword, Frag grenades, Krak grenades)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Bolt pistol'}),
                jasmine.objectContaining({'_name': 'Master-crafted occulus bolt rifle'}),
                jasmine.objectContaining({'_name': 'Neo-volkite pistol'}),
                jasmine.objectContaining({'_name': 'Master-crafted power sword'}),
                jasmine.objectContaining({'_name': 'Paired Combat Blades'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Assault Intercessor Squad',
              '_modelList': [
                '4x Assault Intercessor (Heavy Bolt Pistol, Astartes Chainsword, Frag grenades, Krak grenades)',
                'Assault Intercessor Sgt (Heavy Bolt Pistol, Astartes Chainsword, Frag grenades, Krak grenades)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Heavy Bolt Pistol'}),
                jasmine.objectContaining({'_name': 'Astartes Chainsword'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Bladeguard Veteran Squad',
              '_modelList': [
                '2x Bladeguard Veteran (Heavy Bolt Pistol, Master-crafted power sword, Frag grenades, Krak grenades, Storm shield)',
                'Bladeguard Veteran Sergeant (Heavy Bolt Pistol, Master-crafted power sword, Frag grenades, Krak grenades, Storm shield)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Heavy Bolt Pistol'}),
                jasmine.objectContaining({'_name': 'Master-crafted power sword'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Bladeguard Veteran Squad'}),
            jasmine.objectContaining({
              '_name': 'Outrider Squad',
              '_modelList': [
                '2x Outrider (Heavy Bolt Pistol, Twin Bolt rifle, Astartes Chainsword, Frag grenades, Krak grenades)',
                'Outrider Sgt (Heavy Bolt Pistol, Twin Bolt rifle, Astartes Chainsword, Frag grenades, Krak grenades)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Heavy Bolt Pistol'}),
                jasmine.objectContaining({'_name': 'Twin Bolt rifle'}),
                jasmine.objectContaining({'_name': 'Astartes Chainsword'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            ]})]}));
  });

  it("loads Salamanders test", function() {
    const doc = readRosterFile('test/Salamanders test.ros');
    const roster = Create40kRoster(doc);

    expect(roster).toEqual(
      jasmine.objectContaining({
        '_powerLevel': 24,
        '_points': 475,
        '_commandPoints': 6,
        '_forces': [
          jasmine.objectContaining({'_units': [
            jasmine.objectContaining({
              '_name': 'Captain',
              '_modelList': [
                'Captain (Bolt pistol, Boltgun, Meltagun, Relic blade, Frag grenades, Krak grenades, Forge Master, Obsidian Aquila)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Bolt pistol'}),
                jasmine.objectContaining({'_name': 'Boltgun'}),
                jasmine.objectContaining({'_name': 'Meltagun'}),
                jasmine.objectContaining({'_name': 'Relic blade'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Tactical Squad',
              '_modelStats': [
                jasmine.objectContaining({'_name': 'Space Marine'}),
                jasmine.objectContaining({'_name': 'Space Marine Sergeant'}),
              ],
              '_modelList': [
                '3x Space Marine (Bolt pistol, Boltgun, Frag grenades, Krak grenades)',
                'Space Marine Sergeant (Bolt pistol, Boltgun, Frag grenades, Krak grenades)',
                'Space Marine w/Special Weapon (Bolt pistol, Flamer, Frag grenades, Krak grenades)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Bolt pistol'}),
                jasmine.objectContaining({'_name': 'Boltgun'}),
                jasmine.objectContaining({'_name': 'Flamer'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Tactical Squad',
              '_modelStats': [
                jasmine.objectContaining({'_name': 'Space Marine'}),
                jasmine.objectContaining({'_name': 'Space Marine Sergeant'}),
              ],
              '_modelList': [
                '3x Space Marine (Bolt pistol, Boltgun, Frag grenades, Krak grenades)',
                'Space Marine Sergeant (Bolt pistol, 2x Boltgun, Flamer, Frag grenades, Krak grenades)',
                'Space Marine w/Special Weapon (Bolt pistol, Flamer, Frag grenades, Krak grenades)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Bolt pistol'}),
                jasmine.objectContaining({'_name': 'Boltgun'}),
                jasmine.objectContaining({'_name': 'Flamer'}),
                jasmine.objectContaining({'_name': 'Frag grenades'}),
                jasmine.objectContaining({'_name': 'Krak grenades'}),
              ]}),
            jasmine.objectContaining({
              '_name': 'Redemptor Dreadnought',
              '_modelStats': [
                jasmine.objectContaining({'_name': 'Redemptor Dreadnought [1] (7+ wounds remaining)'}),
                jasmine.objectContaining({'_name': 'Redemptor Dreadnought [2] (4-6 wounds remaining)'}),
                jasmine.objectContaining({'_name': 'Redemptor Dreadnought [3] (1-3 wounds remaining)'}),
              ],
              '_modelList': [
                'Redemptor Dreadnought (Fragstorm Grenade Launcher, Heavy flamer, Heavy Onslaught Gatling Cannon, Redemptor Fist)',
              ],
              '_weapons': [
                jasmine.objectContaining({'_name': 'Fragstorm Grenade Launcher'}),
                jasmine.objectContaining({'_name': 'Heavy flamer'}),
                jasmine.objectContaining({'_name': 'Heavy Onslaught Gatling Cannon'}),
                jasmine.objectContaining({'_name': 'Redemptor Fist'}),
              ]}),
            ]})]}));
  });
});
